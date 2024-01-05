const Calender = () => {
    const currentDate= "05-01-2024"
    const todayDate = new Date().toISOString().slice(0, 10).split("-").reverse().join("-");
  return (
    <>
      {/* header */}
      <div className="bg-white py-4 flex justify-center items-center rounded-t-md">
        <h2 className="text-lg font-bold">January</h2>
      </div>

      <div className="relative overflow-x-auto">
      <table class="w-full table-auto text-end border-collapse border border-[rgba(76,2,3,.2)] rounded-b-md font-semibold">
        <thead>
          <tr className="bg-[rgb(234,141,142)]">
            <th className="w-2 last:py-1 px-2 border border-[rgba(76,2,3,.2)]">তারিখ</th>
            <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">সাহারী</th>
            <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">ফজর</th>
            <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">সূযোদয়</th>
            <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">জোহর</th>
            <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">আছর</th>
            <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">মাগরিব, ইফতার</th>
            <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">এশা</th>
          </tr>
        </thead>
        <tbody className="cursor-pointer">
        <tr className="table_content">
            <td className="w-2 py-1 px-2 border border-[rgba(76,2,3,.2)]">০৪</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২১</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২১</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৬:৪২</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">১২:০৮</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৩:৪৯</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২৯</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৬:৪৮</td>
          </tr>
          <tr className={`${currentDate===todayDate&&"bg-[rgba(76,2,3,.3)]"} table_content1`}>
            <td className="w-2 py-1 px-2 border border-[rgba(76,2,3,.2)]">০৫</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২১</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২১</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৬:৪২</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">১২:০৮</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৩:৪৯</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২৯</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৬:৪৮</td>
          </tr>
          <tr className="table_content">
            <td className="w-2 py-1 px-2 border border-[rgba(76,2,3,.2)]">০৬</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২১</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২১</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৬:৪২</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">১২:০৮</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৩:৪৯</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৫:২৯</td>
            <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">৬:৪৮</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Calender;
