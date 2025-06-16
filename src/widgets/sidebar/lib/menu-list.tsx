type Menu = {
  href: string;
  label: string;
  subMenu?: SubMenu[];
};

type SubMenu = {
  href: string;
  label: string;
  active?: boolean;
};

export function getMenuList(): Menu[] {
  return [
    {
      href: "",
      label: "user",
      subMenu: [
        {
          href: "/admin/user/user-info",
          label: "사용자 정보",
        },
        {
          href: "/admin/user/user-setting",
          label: "사용자 관리",
        },
      ],
    },
  ];
}
