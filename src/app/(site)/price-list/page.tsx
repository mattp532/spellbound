export default function PriceListPage() {
  return (
    <div className="min-h-screen w-full bg-black py-2 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-1">
        <h1 className="text-3xl font-bold text-white uppercase">PRICE LIST</h1>
      </div>
      
      <div className="w-[95%] md:w-3/4 lg:w-2/3 mx-auto py-8 mb-8">
        <div className="flex items-center justify-center -mx-1">
          <table className="text-xs w-full bg-black uppercase border-collapse mx-1">
            <colgroup>
              <col className="w-[40%]" />
              <col className="w-[20%]" />
              <col className="w-[20%]" />
              <col className="w-auto" />
            </colgroup>
            
            <thead className="bg-black">
              <tr>
                <th className="py-3 px-2 text-left font-bold text-sm text-white "></th>
                <th className="py-3 px-2 text-left font-medium text-white">
                  <div>STYLIST</div>
                  <div className="text-[0.65rem] font-normal">WEEKEND ONLY</div>
                </th>
                <th className="py-3 px-2 text-left font-medium text-white">
                  <div>ADVANCED STYLIST</div>
                  <div className="text-[0.65rem] font-normal">APPOINTMENT ONLY</div>
                </th>
                <th className="py-3 px-2 text-left font-medium text-white">DIRECTOR</th>
              </tr>
            </thead>
            
            <tbody>
              {/* Haircut Services */}
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">WOMEN HAIR CUT</td>
                <td className="py-2 px-2 text-white">$55</td>
                <td className="py-2 px-2 text-white">$65</td>
                <td className="py-2 px-2 text-white">$100</td>
              </tr>
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">MEN HAIR CUT</td>
                <td className="py-2 px-2 text-white">$45</td>
                <td className="py-2 px-2 text-white">$55</td>
                <td className="py-2 px-2 text-white">$70</td>
              </tr>
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">SHAMPOO & STYLE</td>
                <td className="py-2 px-2 text-white">$40+</td>
                <td className="py-2 px-2 text-white">$40+</td>
                <td className="py-2 px-2 text-white">$60+</td>
              </tr>
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">UPDO</td>
                <td className="py-2 px-2 text-white"></td>
                <td className="py-2 px-2 text-white">$70+</td>
                <td className="py-2 px-2 text-white">$100+</td>
              </tr>
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">BRIDAL</td>
                <td className="py-2 px-2 text-white"></td>
                <td className="py-2 px-2 text-white">$120+</td>
                <td className="py-2 px-2 text-white">$150+</td>
              </tr>

              {/* Color & Chemical Services Section Header */}
              <tr>
                <td colSpan={4} className="py-4 px-2 font-bold text-white text-sm">COLOR & CHEMICAL SERVICES</td>
              </tr>

              {/* Color Services */}
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">COLOR</td>
                <td className="py-2 px-2 text-white">$100+</td>
                <td className="py-2 px-2 font-medium text-white">PERMANENT WAVE</td>
                <td className="py-2 px-2 text-white">$150+</td>
              </tr>
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">DOUBLE PROCESS COLOR</td>
                <td className="py-2 px-2 text-white">$200+</td>
                <td className="py-2 px-2 font-medium text-white">DIGITAL PERM</td>
                <td className="py-2 px-2 text-white">$250+</td>
              </tr>
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">HIGHLIGHTS PARTIAL</td>
                <td className="py-2 px-2 text-white">$150+</td>
                <td className="py-2 px-2 font-medium text-white">IONIC STRAIGHTENING</td>
                <td className="py-2 px-2 text-white">$250+</td>
              </tr>
              <tr className="my-1">
                <td className="py-2 px-2 font-medium text-white">HIGHLIGHTS FULL</td>
                <td className="py-2 px-2 text-white">$200+</td>
                <td className="py-2 px-2 font-medium text-white">HAIR TREATMENT</td>
                <td className="py-2 px-2 text-white">$80+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-13 text-center text-gray-200 uppercase text-sm">
          <p>* All haircut services include wash & style. A Wash & Style will be</p>
          <p>charged with any chemical services not paired with a haircut service</p>
        </div>
      </div>
    </div>
  );
}