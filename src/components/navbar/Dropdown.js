import React from "react";

function Dropdown() {
  return (
    <>
      <ul class="menu">
        <li class="dropdown dropdown-6">
          Scale Down
          <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
            <li class="dropdown_item-1">Item 1</li>
            <li class="dropdown_item-2">Item 2</li>
            <li class="dropdown_item-3">Item 3</li>
            <li class="dropdown_item-4">Item 4</li>
            <li class="dropdown_item-5">Item 5</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
