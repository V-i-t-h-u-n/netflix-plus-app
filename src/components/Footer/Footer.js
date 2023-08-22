// import Header from "../Header/Header";
import MenuList from '../MenuList/MenuList';
const Footer = function () {
  const copyRightYear = 2023;
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright {copyRightYear}</p>
    </footer>
  );
};
export default Footer;
