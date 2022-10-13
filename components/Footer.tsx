function Footer() {
  return (
    <div
      className="fixed bottom-10 w-full 
     flex flex-col items-center text-white"
    >
      <div>Mischief managed</div>
      <div>
        <p className="font-body text-xs">
          Alexandre Gvozdenovic - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
