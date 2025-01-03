import "./CVItem.module.css";

const CVItem = () => {
  return (
    <div className="border-stokeGrey cv-item flex cursor-pointer items-center gap-3 rounded-xl border px-2 py-3">
      <div className="flex items-center justify-center rounded-lg">
        <img
          src={"/images/pdf-icon.png"}
          alt="pdf"
          className="max-h-6 max-w-6"
        />
      </div>
      <div>
        <p className="cv-title font-semibold">CV UI Designer Kor.pdf</p>
        <div className="text-xs text-grey">23 Aug 2024 at 13:20 am</div>
      </div>
    </div>
  );
};

export default CVItem;
