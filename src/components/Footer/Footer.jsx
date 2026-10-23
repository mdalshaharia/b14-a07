 const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#fbfdfb]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-gray-800 sm:px-6 md:flex-row md:gap-6 md:py-6 md:text-left lg:px-10">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p className="md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
}

export default Footer