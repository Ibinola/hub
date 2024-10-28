import {
  addHubUserIcon,
  addStaffIcon,
  plusIcon,
  spaceManagementIcon,
  graphChartIcon,
  greenCircleIcon2,
  greenIncreaseIcon,
  greenShortArrowUpIcon,
  redDecreaseIcon,
  threeDotsIcon,
  downShortBlackArrowIcon,
} from "../../assets";
import H3 from "../../components/H3";
import P from "../../components/P";
import RecentActivities from "../../components/RecentActivities";
import BarChart from "../../components/BarChart";

const AdminHome = () => {
  return (
    <main className="flex flex-col gap-6">
      {/* quick actions section */}
      <div className="">
        <p className="font-semibold text-[13px]">Quick Actions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-1">
          {/* first action box */}
          <div className="w-full rounded-md bg-[#f2f2f2] flex justify-between items-center px-4 py-5 shadow-sm">
            <div className="flex items-center gap-2">
              <img
                src={spaceManagementIcon}
                alt="space management icon"
                width={35}
                height={35}
              />

              <p className="text-[12px] font-semibold">Space Management</p>
            </div>
          </div>

          {/* second action box */}
          <div className="w-full rounded-md bg-[#f2f2f2] flex justify-between items-center px-4 py-5 shadow-sm">
            <div className="flex items-center gap-2">
              <img
                src={addHubUserIcon}
                alt="space management icon"
                width={35}
                height={35}
              />

              <p className="text-[12px] font-semibold">Add Hub User</p>
            </div>

            <img src={plusIcon} alt="plus icon" width={20} />
          </div>

          {/* third action box - hidden on sm */}
          <div className="w-full  sm:hidden lg:flex rounded-md bg-[#f2f2f2] flex justify-between items-center px-4 py-5 shadow-sm">
            <div className="flex items-center gap-2">
              <img
                src={addStaffIcon}
                alt="space management icon"
                width={35}
                height={35}
              />

              <p className="text-[12px] font-semibold">Add Staff</p>
            </div>

            <img src={plusIcon} alt="plus icon" width={20} />
          </div>
        </div>

        {/* third action box - Hidden on large screen*/}
        <div className="w-full hidden sm:flex lg:hidden rounded-md bg-[#f2f2f2] justify-between items-center px-4 py-5 mt-4 shadow-sm">
          <div className="flex items-center gap-2">
            <img
              src={addStaffIcon}
              alt="space management icon"
              width={35}
              height={35}
            />

            <p className="text-[12px] font-semibold">Add Staff</p>
          </div>

          <img src={plusIcon} alt="plus icon" width={20} />
        </div>
      </div>

      {/* stats section */}
      <div className="">
        <p className="font-semibold text-[13px]">Stats</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-1">
          {/* first stats box */}
          <div className="w-full rounded-md bg-white px-4 py-4 flex flex-col gap-3 shadow-md">
            {/* top */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[14px] font-semibold">
                  Net Position Today
                </h3>
                <p className="text-[#475467] text-[10px] -mt-0.5">
                  Mon 14 October, 12:46 PM
                </p>
              </div>

              <img src={threeDotsIcon} alt="more info icon" width={16} />
            </div>

            {/* middle */}
            <div className="flex justify-between">
              <div className=" border-r-[1.5px] border-gray-200 flex flex-col gap-1 w-[50%]">
                <div className="flex gap-4">
                  <p className="font-semibold text-[22px]">53</p>{" "}
                  <img
                    src={greenIncreaseIcon}
                    alt="increase icon"
                    width={15}
                    height={15}
                    className="-mt-2"
                  />
                </div>
                <p className="text-[11px] font-light">checked in</p>
              </div>

              <div className="w-[50%] flex-col gap-1 pl-[15%]">
                <div className="flex gap-4">
                  <p className="font-semibold text-[22px]">23</p>{" "}
                  <img
                    src={redDecreaseIcon}
                    alt="reducing icon"
                    width={15}
                    height={15}
                    className="-mt-2"
                  />
                </div>
                <p className="text-[11px] font-light mt-1">checked out</p>
              </div>
            </div>

            {/* bottom */}
            <p className="text-[11px]">
              <strong>23 people</strong> are within the space
            </p>
          </div>

          {/* second stats box */}
          <div className="w-full rounded-md bg-white px-4 py-4 flex flex-col gap-3 shadow-md">
            {/* top */}
            <div className="flex justify-between items-start">
              <div>
                <H3>Hub Users</H3>
              </div>
              <img src={threeDotsIcon} alt="more info icon" width={16} />
            </div>

            {/* middle */}
            <div className="flex flex-col">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  {/* Stats number */}
                  <div className="flex gap-4">
                    <p className="font-semibold text-[22px]">72</p>
                  </div>

                  {/* Percentage comparison */}
                  <div className="flex items-center gap-1">
                    <img
                      src={greenShortArrowUpIcon}
                      alt="green icon"
                      width={15}
                    />
                    <p className="text-[11px] font-normal">
                      <span className="text-[#027A48] font-semibold">40%</span>{" "}
                      vs last month
                    </p>
                  </div>
                </div>

                {/* Graph chart - now properly positioned */}
                <div className="w-24 min-w-[96px] ml-auto">
                  <img
                    src={graphChartIcon}
                    alt="graph icon"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* bottom */}
            <p className="text-[11px] flex items-center gap-1 mt-3">
              <img src={greenCircleIcon2} alt="green circle icon" width={12} />
              24 Active subscription
            </p>
          </div>

          {/* third stats box - hidden on sm*/}
          <div className="w-full rounded-md bg-white px-4 py-4 flex flex-col gap-3 sm:hidden lg:flex shadow-md">
            {/* top */}
            <div className="flex justify-between items-start">
              <div>
                <H3>Staff</H3>
              </div>
              <img src={threeDotsIcon} alt="more info icon" width={16} />
            </div>

            {/* middle */}
            <div className="flex flex-col">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  {/* Stats number */}
                  <div className="flex gap-4">
                    <p className="font-semibold text-[22px]">44</p>
                  </div>

                  {/* Percentage comparison */}
                  <div className="flex items-center gap-1">
                    <img
                      src={greenShortArrowUpIcon}
                      alt="green icon"
                      width={15}
                    />
                    <p className="text-[11px] font-normal">
                      <span className="text-[#027A48] font-semibold">40%</span>{" "}
                      vs last month
                    </p>
                  </div>
                </div>

                {/* Graph chart - now properly positioned */}
                <div className="w-24 min-w-[96px] ml-auto">
                  <img
                    src={graphChartIcon}
                    alt="graph icon"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third stats box - hidden on large screen*/}
        <div className="w-full rounded-md bg-white px-4 py-4 flex-col gap-3 hidden sm:flex lg:hidden mt-4 shadow-md">
          {/* top */}
          <div className="flex justify-between items-start">
            <div>
              <H3>Staff</H3>
            </div>
            <img src={threeDotsIcon} alt="more info icon" width={16} />
          </div>

          {/* middle */}
          <div className="flex flex-col">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                {/* Stats number */}
                <div className="flex gap-4">
                  <p className="font-semibold text-[22px]">44</p>
                </div>

                {/* Percentage comparison */}
                <div className="flex items-center gap-1">
                  <img
                    src={greenShortArrowUpIcon}
                    alt="green icon"
                    width={15}
                  />
                  <p className="text-[11px] font-normal">
                    <span className="text-[#027A48] font-semibold">40%</span> vs
                    last month
                  </p>
                </div>
              </div>

              {/* Graph chart - now properly positioned */}
              <div className="w-24 min-w-[96px] ml-auto">
                <img
                  src={graphChartIcon}
                  alt="graph icon"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recent activities section */}
      <div className="">
        <p className="font-semibold text-[13px]">Recent Activities</p>

        <div className="flex gap-4 mt-1 flex-col lg:flex-row">
          {/* activities section */}
          <div className="w-full lg:w-[67.5%] shadow-md rounded-b-lg">
            <RecentActivities />
          </div>

          {/* user distribution section */}
          <div className="w-full lg:w-[32.5%] shadow-md rounded-b-lg">
            <div className="w-full mx-auto bg-white rounded-lg">
              <div className="flex justify-between items-start px-2 pt-3 pb-2">
                <div>
                  <h3 className="text-[12px] font-semibold">
                    User Distribution
                  </h3>
                </div>

                <img src={threeDotsIcon} alt="more info icon" width={16} />
              </div>

              <hr />

              <div className="pl-3 pr-2 pt-6 pb-5">
                {/* spaces section */}
                <div className="flex gap-2">
                  <div className="bg-[#F4F5F4] rounded-full px-2 py-1 text-[12px] font-semibold flex items-center">
                    54 Persons
                  </div>

                  <div className="flex gap-2 items-center text-[12px] font-semibold bg-[#F4F5F4] rounded-full px-2 py-1">
                    <img
                      src={spaceManagementIcon}
                      alt="space icon"
                      width={18}
                    />{" "}
                    6 Spaces
                  </div>
                </div>

                {/* bar chart section */}
                {/* <div></div> */}
                <BarChart width={160} />

                {/* filter section */}
                <div className="flex items-center gap-3 mt-3 ml-3">
                  <div className="bg-gray-200 rounded-full px-2 py-1 text-[11px] font-semibold flex items-center text-[#475467]">
                    Today
                  </div>

                  <p className="text-[#475467] text-[11px]">Yesterday</p>

                  <div className="flex items-center space-x-2 text-[#475467] text-[11px]">
                    <span>Select Date</span>
                    <img
                      src={downShortBlackArrowIcon}
                      alt="calender icon"
                      width={11}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
