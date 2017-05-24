import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
body, table, tr, tbody, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body {
  background-color: black !important;
  color: white !important;
  line-height: 1;
}
.title-wrapper {
        margin-top: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td {
  border: 1px solid darkgrey !important;
  height: 1em;
  width: 1em;
}
table {
  margin: 1em 0;
}

.table-wrapper {
 display: inline-flex;
}

.container {
  margin: 1.5em auto;
}

.btn-wrapper {
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
}

.setting-label {
  line-height: 2.5;
}

.btn:hover {
  cursor: pointer;
}

Input[type='radio'] {
  visibility: hidden;
}

.btn-highlighted {
  background-color: #025AA5 !important;
  color: white !important;
}

.alive {
  background: #a94442;
}
.new-born {
  background: #5cb85c;
}
td:hover:not(.alive):not(.new-born) {
  background: #DDD;
}

.setting-input-wrapper{
  width: 0;
}

.counter-wrapper {
  padding-top: 10px;
}

.control-wrapper {
  margin-top: 10px;
}
@media only screen and (max-width: 480px) {
  .icon-wrapper {
      margin-left: -4px;
  }
  h3 {
      font-size: 1.3em;
  }
  .setting-label {
      font-size:0.75em;
  }
  .rb-col-2 {
      padding-left: 0 !important;
      padding-right: 0 !important;
      padding-top: 3px;
  }

}

@media only screen and (min-width:481px) and (max-width: 768px) {
  .setting-label {
      font-size:0.85em;
  }
  .rb-col-2 {
      padding-left: 0 !important;
      padding-right: 0 !important;
      padding-top: 3px;
  }
}

`
