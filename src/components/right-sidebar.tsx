import React from 'react';

export const RightSidebar = (): React.ReactElement => {
  return (
    <>
      <div className="hidden h-full overflow-scroll pt-3 md:block md:w-1/4">
        <div className="w-5/6 border-b border-gray-300 pb-4">
          <h3 className="text-md mb-4 font-semibold text-gray-500">광고</h3>
          <ul>
            <li className="mb-2 rounded-md p-2 hover:bg-gray-300">
              <a
                className="flex items-center"
                href="https://jay-dev.notion.site/1326a550a0254ea5b6d9457b3013ac4b"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../assets/images/resume.png')}
                  className=" mr-3 aspect-auto w-24 rounded-md"
                />
                <h4 className="text-sm">이력서 보러가기</h4>
              </a>
            </li>
            <li className="rounded-md p-2 hover:bg-gray-300">
              <a
                className="flex items-center"
                href="https://jay-dev.notion.site/1326a550a0254ea5b6d9457b3013ac4b"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require('../assets/images/resume.png')}
                  className=" mr-3 aspect-auto w-24 rounded-md"
                />
                <h4 className="text-sm">이력서 확인</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
