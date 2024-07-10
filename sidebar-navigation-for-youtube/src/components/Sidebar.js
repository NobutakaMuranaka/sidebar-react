import React from "react";
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == value.link ? "active" : ""}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

// 学習メモ
// 参考にした動画：　https://www.youtube.com/watch?v=YtkwC5lSW0M&list=PLT5klp7W4r8QsTk3YZgqImARa11G0Vcgl&index=3
// 参考になる記事：　https://qiita.com/KNR109/items/e13a5c5b8b461e846902
// 配列をループ処理でJSX内で使う場合にkeyを指定する。keyを渡さない場合はReactでは全てのReact要素を差分として認識し、DOMに反映する。
// つまりkeyを渡すことで、差分だけが抽出され更新される。以上より、keyを指定しないと変更していない箇所も差分として認識されパフォーマンスが悪くなってしまいます。

