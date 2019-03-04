<template>
  <nav :class="$style.navContainer">
    <div :class="$style.topNav">
      <ul :class="$style.topNavList">
        <li :class="$style.topNavItem">
          <a href>How it works</a>
        </li>

        <li :class="$style.topNavItem">
          <a href>Log in</a> |
          <a>Sign Up</a>
        </li>
      </ul>
    </div>

    <div :class="$style.mainNav">
      <a href :class="$style.mainNavLogo">
        <img src="../assets/logo.jpg" alt="Logo">
      </a>

      <form :class="$style.mainNavSearch">
        <i class="material-icons">search</i>
        <input type="search" placeholder="Search for products">
        <button type="submit">Search</button>
      </form>

      <div :class="$style.mainNavIcons">
        <a href>
          <i class="material-icons">shopping_cart</i>
        </a>

        <a href>
          <i class="material-icons">favorite</i>
        </a>

        <a href>
          <i class="material-icons">notifications_none</i>
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang='scss' module>
.navContainer {
}

.topNav {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  display: flex;
  font-size: 14px;
  margin: 0 auto;
}

.topNavList {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 auto;
  max-width: var(--page-width);
  padding: 15px 10px 17px;
  width: 100%;
}

.topNavItem {
  margin-left: 20px;

  &:first-child {
    margin-left: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}

.mainNav {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: var(--page-width);
  margin: 0 auto;
  padding: 20px 10px;
  width: 100%;
}

.mainNavLogo {
  display: inline-block;
  height: 40px;

  img {
    max-height: 100%;
    width: auto;
  }
}

.mainNavSearch {
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 3px;
  display: flex;
  font-size: 14px;
  height: 45px;
  margin: 10px auto;

  i {
    color: rgba(0, 0, 0, 0.4);
    margin-left: 10px;
    font-size: 20px;
  }

  input {
    background-color: transparent;
    border: none;
    margin-left: 5px;
    min-width: 180px;
    padding: 0 5px;
    width: 30vw;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #f4d237;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 100%;
    padding: 0 25px;
    text-transform: uppercase;
  }
}

.mainNavIcons {
  a {
    color: inherit;
    display: inline-block;
    margin-left: 15px;
  }
}
</style>
