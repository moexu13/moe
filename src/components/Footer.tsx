const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-white/5">
      <div className="container mx-auto px-4 text-center text-white/60">
        <p>© {currentYear} Melissa Albarella. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 