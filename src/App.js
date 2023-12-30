import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    {
      categoryName: "Cuisine",
      categoryId: 1,
      menuArray: [
        { catId: 1, menuId: 23 },
        { catId: 1, menuId: 24 },
        { catId: 1, menuId: 25 },
        { catId: 1, menuId: 26 }
      ]
    },
    {
      categoryName: "Beverages",
      categoryId: 2,
      menuArray: [
        { catId: 2, menuId: 31 },
        { catId: 2, menuId: 32 },
        { catId: 2, menuId: 33 },
        { catId: 2, menuId: 34 }
      ]
    },
    {
      categoryName: "Desserts",
      categoryId: 3,
      menuArray: [
        { catId: 3, menuId: 41 },
        { catId: 3, menuId: 42 },
        { catId: 3, menuId: 43 },
        { catId: 3, menuId: 44 }
      ]
    },
    {
      categoryName: "Seafood",
      categoryId: 4,
      menuArray: [
        { catId: 4, menuId: 51 },
        { catId: 4, menuId: 52 },
        { catId: 4, menuId: 53 },
        { catId: 4, menuId: 54 }
      ]
    },
    {
      categoryName: "Pizza",
      categoryId: 5,
      menuArray: [
        { catId: 5, menuId: 61 },
        { catId: 5, menuId: 62 },
        { catId: 5, menuId: 63 },
        { catId: 5, menuId: 64 }
      ]
    },
    {
      categoryName: "Salads",
      categoryId: 6,
      menuArray: [
        { catId: 6, menuId: 71 },
        { catId: 6, menuId: 72 },
        { catId: 6, menuId: 73 },
        { catId: 6, menuId: 74 }
      ]
    },
    {
      categoryName: "Sushi",
      categoryId: 7,
      menuArray: [
        { catId: 7, menuId: 81 },
        { catId: 7, menuId: 82 },
        { catId: 7, menuId: 83 },
        { catId: 7, menuId: 84 }
      ]
    },
    {
      categoryName: "Steak",
      categoryId: 8,
      menuArray: [
        { catId: 8, menuId: 91 },
        { catId: 8, menuId: 92 },
        { catId: 8, menuId: 93 },
        { catId: 8, menuId: 94 }
      ]
    },
    {
      categoryName: "Pasta",
      categoryId: 9,
      menuArray: [
        { catId: 9, menuId: 101 },
        { catId: 9, menuId: 102 },
        { catId: 9, menuId: 103 },
        { catId: 9, menuId: 104 }
      ]
    },
    {
      categoryName: "Deli",
      categoryId: 10,
      menuArray: [
        { catId: 10, menuId: 111 },
        { catId: 10, menuId: 112 },
        { catId: 10, menuId: 113 },
        { catId: 10, menuId: 114 }
      ]
    }
  ];
  
  const [user, setUser] = useState(data);
  var t = "";
  var selected = [];

  const handledelete = (categoryId) => {
    t = document.getElementById(categoryId);

    const selector = `.menu${categoryId}`;
    const allMenu = document.querySelectorAll(selector);

    if (t.checked === false) {
      allMenu.forEach((menu) => {
        if (menu.type === 'checkbox') {
          menu.checked = false;
          // Remove the item from the selected array
          selected = selected.filter((value) => value !== menu.value);
        }
      });
    } else {
      allMenu.forEach((menu) => {
        if (menu.type === 'checkbox') {
          menu.checked = true;
          // Add the item to the selected array
          selected.push(menu.value);
        }
      });
    }

    const commaSeparated = selected.join(",");
    console.log(commaSeparated);

    // Update the state or perform any other necessary action
  };

  const handlesubDelete = (checked, value, catId) => {
    const selector = `.menu${catId}`;
    const allMenu = document.querySelectorAll(selector);
    const selectedCheckboxes = document.querySelectorAll(`input.menu${catId}:checked`);

    t = document.getElementById(catId);

    if (!checked) {
      // Remove the item from the selected array
      selected = selected.filter((val) => val !== value);
    } else {
      // Add the item to the selected array
      selected.push(value);
    }

    // If any checkbox in `menuArray` is unchecked, uncheck the corresponding category checkbox
    t.checked = selectedCheckboxes.length === allMenu.length;

    const commaSeparated = selected.join(",");
    console.log(commaSeparated);

    // Update the state or perform any other necessary action
  };

  return (
    <div className="App">
      {user.map((menu) => (
        <div key={menu.categoryId}>
          <div className="flex">
            <input
              type="checkbox"
              value={menu.categoryId}
              id={menu.categoryId}
              onChange={() => handledelete(menu.categoryId)}
            />
            <div>{menu.categoryName}</div>
          </div>
          {menu.menuArray.map((menuDetail) => (
            <div key={menuDetail.menuId}>
              <input
                type="checkbox"
                className={`menu${menuDetail.catId}`}
                value={menuDetail.menuId}
                onChange={(e) => handlesubDelete(e.target.checked, e.target.value, menuDetail.catId)}
              />
              <div>{menuDetail.menuId}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;