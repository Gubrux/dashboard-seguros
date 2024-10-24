import { SVGImage } from "@/constent/Theme";
import { reactive } from "vue";

interface sumMenuDownType {
  child?: string;
  to?: string;
}
interface subMenuType {
  menu?: string;
  to?: string;
  className?: string;
  subMenuDownItems?: sumMenuDownType[];
}

interface menuType {
  icons?: string;
  title?: string;
  className?: string;
  to?: string;
  subMenuItems?: subMenuType[];
}

const MenuItems = reactive<menuType[]>([
  {
    icons: SVGImage.iconSvg1,
    title: "Dashboard",
    className: "sub-menu",
    subMenuItems: [
      { menu: "Dashboard Produccion", to: "/" },
      { menu: "Dashboard Siniestros", to: "/dashboard-siniestros" },
      { menu: "Dashboard Comparativo", to: "/dashboard-comparativos" },
      // { menu: "Dashboard Dark", to: "/index-2" },
    ],
  },
  // { icons: SVGImage.iconSvg2, title: "Employees", to: "/employee" },
  // { icons: SVGImage.iconSvg3, title: "Core HR", to: "/core-hr" },
  // { icons: SVGImage.iconSvg4, title: "Finance", to: "/finance" },
  // {
  //   icons: SVGImage.iconSvg5,
  //   title: "Tasks",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Tasks", to: "/task" },
  //     { menu: "Task Summary", to: "/task-summary" },
  //   ],
  // },
  // { icons: SVGImage.iconSvg6, title: "Performance", to: "/performance" },
  // { icons: SVGImage.iconSvg7, title: "Projects", to: "/project" },
  // { icons: SVGImage.iconSvg8, title: "Reports", to: "/reports" },
  // { icons: SVGImage.iconSvg9, title: "Manage Clients", to: "/manage-client" },
  // { icons: SVGImage.iconSvg10, title: "Blog", to: "/blog-1" },
  // { icons: SVGImage.iconSvg11, title: "SVG Icons", to: "/svg-icon" },
  // { title: "OUR FEATURES", className: "menu-title" },
  // {
  //   icons: SVGImage.iconSvg12,
  //   title: "Apps",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Chat", to: "/chat" },
  //     {
  //       menu: "Users Manager",
  //       className: "sub-menu-down",
  //       subMenuDownItems: [
  //         { child: "User", to: "/user" },
  //         { child: "Add User", to: "/edit-profile" },
  //         { child: "Roles Listing", to: "/user-roles" },
  //         { child: "Add Roles", to: "/add-role" },
  //         { child: "Profile 1", to: "/app-profile-1" },
  //         { child: "Profile 2", to: "/app-profile-2" },
  //         { child: "Edit Profile", to: "/edit-profile" },
  //         { child: "Post Details", to: "/post-details" },
  //       ],
  //     },
  //     {
  //       menu: "Customer Manager",
  //       className: "sub-menu-down",
  //       subMenuDownItems: [
  //         { child: "Customer", to: "/customer" },
  //         { child: "Customer Profile", to: "/customer-profile" },
  //       ],
  //     },
  //     { menu: "Contacts", to: "/contacts" },
  //     {
  //       menu: "Email",
  //       className: "sub-menu-down",
  //       subMenuDownItems: [
  //         { child: "Compose", to: "/email-compose" },
  //         { child: "Inbox", to: "/email-inbox" },
  //         { child: "Read", to: "/email-read" },
  //       ],
  //     },
  //     { menu: "Calendar", to: "/app-calender" },
  //     {
  //       menu: "Shop",
  //       className: "sub-menu-down",
  //       subMenuDownItems: [
  //         { child: "Product Grid", to: "/ecom-product-grid" },
  //         { child: "Product List", to: "/ecom-product-list" },
  //         { child: "Product Details", to: "/ecom-product-detail" },
  //         { child: "Order", to: "/ecom-product-order" },
  //         { child: "Checkout", to: "/ecom-checkout" },
  //         { child: "Invoice", to: "/ecom-invoice" },
  //         { child: "Customers", to: "/ecom-customes" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   icons: SVGImage.iconSvg13,
  //   title: "AIKit",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Auto Writer", to: "/auto-write" },
  //     { menu: "Scheduler", to: "/scheduled" },
  //     { menu: "Repurpose", to: "/repurpose" },
  //     { menu: "RSS", to: "/rss" },
  //     { menu: "Chatbot", to: "/chatbot" },
  //     { menu: "Fine-tune Models", to: "/fine-tune-models" },
  //     { menu: "AI Menu Prompts", to: "/prompt" },
  //     { menu: "Settings", to: "/setting" },
  //     { menu: "Export/Import Settings", to: "/import" },
  //   ],
  // },
  // {
  //   icons: SVGImage.iconSvg14,
  //   title: "CMS",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Content", to: "/content" },
  //     { menu: "Menus", to: "/menu" },
  //     { menu: "Email Template", to: "/email-template" },
  //     { menu: "Blog", to: "/blog" },
  //   ],
  // },
  // {
  //   icons: SVGImage.iconSvg15,
  //   title: "Charts",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Flot", to: "/chart-flot" },
  //     { menu: "Apax", to: "/chart-apax" },
  //     { menu: "Chartjs", to: "/chart-chartjs" },
  //   ],
  // },
  // {
  //   icons: SVGImage.iconSvg16,
  //   title: "Bootstrap",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Accordion", to: "/ui-accordion" },
  //     { menu: "Alert", to: "/ui-alert" },
  //     { menu: "Badge", to: "/ui-badge" },
  //     { menu: "Button", to: "/ui-button" },
  //     { menu: "Modal", to: "/ui-modal" },
  //     { menu: "Button Group", to: "/ui-button-group" },
  //     { menu: "List Group", to: "/ui-list-group" },
  //     { menu: "Cards", to: "/ui-card" },
  //     { menu: "Carousel", to: "/ui-carousel" },
  //     { menu: "Dropdown", to: "/ui-dropdown" },
  //     { menu: "Popover", to: "/ui-popover" },
  //     { menu: "Progressbar", to: "/ui-progressbar" },
  //     { menu: "Tab", to: "/ui-tab" },
  //     { menu: "Typography", to: "/ui-typography" },
  //     { menu: "Pagination", to: "/ui-pagination" },
  //     { menu: "Grid", to: "/ui-grid" },
  //   ],
  // },
  // {
  //   icons: SVGImage.iconSvg21,
  //   title: "Plugins",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Select 2", to: "/uc-select2" },
  //     { menu: "Nestable", to: "/uc-nestable" },
  //     { menu: "Sweet Alert", to: "/uc-sweetalert" },
  //     { menu: "Toastr", to: "/uc-toastr" },
  //     { menu: "Jqv Map", to: "/map-jqvmap" },
  //     { menu: "Light Gallery", to: "/uc-lightgallery" },
  //   ],
  // },
  // { icons: SVGImage.iconSvg17, title: "Widget", to: "/widget-basic" },
  // {
  //   icons: SVGImage.iconSvg18,
  //   title: "Forms",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Form Elements", to: "/form-element" },
  //     { menu: "Wizard", to: "/form-wizard" },
  //     { menu: "CkEditor", to: "/form-ckeditor" },
  //     { menu: "Pickers", to: "/form-pickers" },
  //     { menu: "Form Validate", to: "/form-validation" },
  //   ],
  // },
  // {
  //   icons: SVGImage.iconSvg19,
  //   title: "Table",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Bootstrap", to: "/table-bootstrap-basic" },
  //     { menu: "Datatable", to: "/table-datatable-basic" },
  //   ],
  // },
  // {
  //   icons: SVGImage.iconSvg20,
  //   title: "Pages",
  //   className: "sub-menu",
  //   subMenuItems: [
  //     { menu: "Login", to: "/page-login" },
  //     { menu: "Register", to: "/page-register" },
  //     {
  //       menu: "Error",
  //       className: "sub-menu-down",
  //       subMenuDownItems: [
  //         { child: "Error 400", to: "/page-error-400" },
  //         { child: "Error 403", to: "/page-error-403" },
  //         { child: "Error 404", to: "/page-error-404" },
  //         { child: "Error 500", to: "/page-error-500" },
  //         { child: "Error 503", to: "/page-error-503" },
  //       ],
  //     },
  //     { menu: "Lock Screen", to: "/page-lock-screen" },
  //     { menu: "Empty Page", to: "/empty-page" },
  //   ],
  // },
]);
export default MenuItems;
