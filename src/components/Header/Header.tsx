import { Menu, Group, Center, Burger, Container, Image, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18next from "i18next"
import React, { useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';

export function Header() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18next.language
  const getCurrentFlag = (language: string) => {
    return <ReactCountryFlag style={{ width: "36px" }} svg countryCode={language} />;
  }
  const languages = ["gb", "de", "bg", "tr"]
  const languageMenu = languages.map((lol: string) => { return <Menu.Item onClick={() => i18n.changeLanguage(lol)}>{getCurrentFlag(lol)}</Menu.Item> })
  const links = [
    { link: '/about', label: t("About") },
    { link: '/contact', label: t("Contact") },
    {
      link: '/category',
      label: t("Products"),
      links: [
        { link: '/products/category1', label: t("products1") },
        { link: '/products/category2', label: t("products2") },
        { link: '/products/category3', label: t("products3") },
        { link: '/products/category4', label: t("products4") },
        { link: '/products/category5', label: t("products5") },
        { link: '/products/category6', label: t("products6") },
      ],
    },
  ];

  const [opened, { toggle }] = useDisclosure(false);

  const navigate = useNavigate()
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}  ><Anchor  href={item.link} >{item.label}</Anchor></Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <Image src="/assets/BeyazLogo.jpg" onClick={()=> navigate("/")} w={200}></Image>
          <Group gap={5} visibleFrom="sm">
            {items}
            <Menu trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
              <Menu.Target>

                <Center>
                  <span className={classes.linkLabel}>{getCurrentFlag(currentLanguage)}</span>
                  <IconChevronDown size="0.9rem" stroke={1.5} />
                </Center>

              </Menu.Target>
              <Menu.Dropdown>{languageMenu}</Menu.Dropdown>
            </Menu>
          </Group>

          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}