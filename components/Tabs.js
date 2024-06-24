import { siteConfig } from '@/lib/config';
import { useState } from 'react';

/**
 * Tabs切换标签
 */
const Tabs = ({ className, children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const validChildren = children.filter((c) => c);
  if (validChildren.length === 0) return;

  return (
    <div className={`mb-5 duration-200 ${className || ''}`}>
      {!(validChildren.length === 1 && siteConfig('COMMENT_HIDE_SINGLE_TAB')) && (
        <ul className="flex justify-center space-x-5 pb-4 dark:text-gray-400 text-gray-600 overflow-auto">
          {validChildren.map((item, index) => (
            <li
              key={index}
              className={`${
                currentTab === index
                  ? 'font-black border-b-2 border-teal-600 text-teal-600 animate__animated animate__jello'
                  : 'font-extralight cursor-pointer'
              } text-sm`}
              onClick={() => setCurrentTab(index)}
            >
              {item.key}
            </li>
          ))}
        </ul>
      )}
      {/* 标签切换的时候不销毁 DOM 元素，使用 CSS 样式进行隐藏 */}
      <div>
        {validChildren.map((item, index) => (
          <section
            key={index}
            className={`${
              currentTab === index
                ? 'opacity-100 static h-auto'
                : 'opacity-0 absolute h-0 pointer-events-none overflow-hidden'
            }`}
          >
            {item}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
