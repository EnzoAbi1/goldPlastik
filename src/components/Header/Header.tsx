import { Menu, Group, Center, Burger, Container, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useTranslation } from 'react-i18next';

export function Header() {


  const { t } = useTranslation();
  const links = [
    { link: '/about', label: t("About") },
    { link: '/contact', label: t("Contact") },
    {
      link: '#2',
      label: t("Products"),
      links: [
        { link: '/products1', label: t("products1") },
        { link: '/products2', label: t("products2") },
        { link: '/products3', label: t("products3") },
        { link: '/products4', label: t("products4") },
        { link: '/products5', label: t("products5") },
        { link: '/products6', label: t("products6") },
      ],
    },
  ];

  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
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
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Image src="assets/BeyazLogo.jpg" w={300}></Image>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}