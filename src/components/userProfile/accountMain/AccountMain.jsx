export default function AccountMain() {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <div className="flex justify-start gap-5 p-5 bg-sky-100 shadow-md rounded-lg">
          <img src="/network.svg" alt="" className="w-24 h-24" />
          <div className="grow flex flex-col gap-2">
            <h2 className="text-2xl">HI , Pola Mounir</h2>
            <p>pola@gmail.com</p>
            <p></p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="bg-sky-100 shadow-md flex gap-5 p-5 rounded-lg ">
            <img src="/network.svg" alt="" className="w-16 h-16" />
            <div>
              <div>
                <h3 className="text-lg">Address 1</h3>
                <p>aaaaaaaaaa , aaaaaaaaa , aaaaaaaa, aaaaaa</p>
              </div>
              <div>
                <h3 className="text-lg">Phone</h3>
                <p>+201234567890</p>
              </div>
            </div>
          </div>
          <div className="bg-sky-100 shadow-md flex gap-5 p-5 rounded-lg ">
            <img src="/network.svg" alt="" className="w-16 h-16" />
            <div>
              <div>
                <h3 className="text-lg">Address 1</h3>
                <p>aaaaaaaaaa , aaaaaaaaa , aaaaaaaa, aaaaaa</p>
              </div>
              <div>
                <h3 className="text-lg">Phone</h3>
                <p>+201234567890</p>
              </div>
            </div>
          </div>
          <div className="bg-sky-100 shadow-md flex gap-5 p-5 rounded-lg ">
            <img src="/network.svg" alt="" className="w-16 h-16" />
            <div>
              <div>
                <h3 className="text-lg">Address 1</h3>
                <p>aaaaaaaaaa , aaaaaaaaa , aaaaaaaa, aaaaaa</p>
              </div>
              <div>
                <h3 className="text-lg">Phone</h3>
                <p>+201234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
