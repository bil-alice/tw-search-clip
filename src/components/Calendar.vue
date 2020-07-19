<template>
  <div>
    <!-- カレンダーヘッダ -->
    <div id="cal-header">
      <span class="header-arrow" v-on:touchstart="setLastMonth">＜</span>
      <span class="selected-month">{{year}}/{{String(month).padStart(2, '0')}}</span>
      <span class="header-arrow" v-on:touchstart="setNextMonth">＞</span>
    </div>

    <!-- カレンダーメイン -->
    <div id="cal-wrap">
      <table id="cal-main">
        <!-- 曜日を表示させる（テーブルヘッダ） -->
        <thead>
          <th v-for="(dayname,index) in weekdays" :key="index">{{dayname}}</th>
        </thead>
        <!-- 日付を表示させる（テーブルボディ） -->
        <tbody>
          <tr v-for="(weekData,index) in calData" :key="index">
            <td
              class="cal-day"
              v-for="(dayNum,index) in weekData"
              :key="index"
              v-on:touchstart="dateClick(dayNum)"
              :class="{'cal-today': isToday(dayNum), active: day === dayNum || (month===searchConfig.date.month && year===searchConfig.date.year && dayNum===searchConfig.date.day)}"
            >
              <span>{{dayNum}}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-on:touchstart="setToday()">today</div>
    </div>

    <div id="search-range-of-time" class="search-config">
      <p>Range of Time</p>
      <div>
        <input
          type="time"
          id="start-time"
          name="start-time"
          step="1"
          v-model="searchConfig.timeRange.start"
        />
        <span>～</span>
        <input
          type="time"
          id="end-time"
          name="end-time"
          step="1"
          v-model="searchConfig.timeRange.end"
        />
        <div>
          <input
            type="radio"
            id="set-am"
            name="set-ampm"
            value="AM"
            v-on:change="changeTimeRange"
            :checked="searchConfig.timeRange.start==='00:00:00'&&searchConfig.timeRange.end==='11:59:59'?true:false"
          />
          <label for="AM">AM</label>
          <input
            type="radio"
            id="set-pm"
            name="set-ampm"
            value="PM"
            v-on:change="changeTimeRange"
            :checked="searchConfig.timeRange.start==='12:00:00'&&searchConfig.timeRange.end==='23:59:59'?true:false"
          />
          <label for="PM">PM</label>
        </div>
      </div>
    </div>
    <div id="search-option" class="search-config">
      <p>Search Filter</p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Include:</td>
              <td>
                <input
                  type="checkbox"
                  id="follows"
                  value="follows"
                  v-model="searchConfig.filters.include"
                  :checked="searchConfig.filters.include.includes('follows')?true:false"
                />
                <label for="follows">follows</label>
              </td>
            </tr>
            <tr>
              <td>Exclude:</td>
              <td>
                <input
                  type="checkbox"
                  id="replies"
                  value="replies"
                  v-model="searchConfig.filters.exclude"
                  :checked="searchConfig.filters.exclude.includes('replies')?true:false"
                />
                <label for="replies">replies</label>
                <input
                  type="checkbox"
                  id="retweets"
                  value="retweets"
                  v-model="searchConfig.filters.exclude"
                  :checked="searchConfig.filters.exclude.includes('retweets')?true:false"
                />
                <label for="retweets">retweets</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="search-word" class="search-config">
      <p>Search Text</p>
      <div>
        <p
          type="text"
          value="Hello World"
          id="myInput"
          style=" white-space: pre;"
        >{{searchConfig.text}}</p>
      </div>
    </div>
    <button id="copyBtn" v-on:touchstart="copy()">Copy</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      year: 2020,
      month: 3,
      day: -1,
      today: "",
      searchConfig: {
        text: "",
        date: {
          year: null,
          month: null,
          day: null
        },
        timeRange: {
          start: "00:00:00",
          end: "00:00:00"
        },
        filters: {
          exclude: [],
          include: []
        }
      },
      history: null
    };
  },
  watch: {
    day(v) {
      if (v !== -1) {
        this.searchConfig.date.year = this.year;
        this.searchConfig.date.month = this.month;
        this.searchConfig.date.day = this.day;
      }
    },
    searchConfig: {
      handler: function() {
        const _since = `since:${this.searchConfig.date.year}-${this.searchConfig.date.month}-${this.searchConfig.date.day}_${this.searchConfig.timeRange.start}_JST`;
        const _until = `until:${this.searchConfig.date.year}-${this.searchConfig.date.month}-${this.searchConfig.date.day}_${this.searchConfig.timeRange.end}_JST`;
        const _iFilter = `${this.searchConfig.filters.include
          .map(item => `filter:${item}`)
          .join(" ")}`;
        const _eFilter = `${this.searchConfig.filters.exclude
          .map(item => `-filter:${item}`)
          .join(" ")}`;
        this.searchConfig.text = `${_since} \n${_until} ${
          _iFilter || _eFilter ? `\n${_iFilter} ${_eFilter}` : ""
        }`;
      },
      deep: true
    }
  },
  beforeMount() {
    this.history = localStorage.history;
  },
  mounted() {
    var date = new Date();
    var y = date.getFullYear();
    var m = ("0" + (date.getMonth() + 1)).slice(-2);
    var d = ("0" + date.getDate()).slice(-2);

    // yearとmonthを設定
    this.year = y;
    this.month = Number(m);
    // 今日の日付を設定
    this.today = y + "-" + m + "-" + d;

    try {
      const _hj = JSON.parse(this.history);
      if (_hj.date && _hj.date.year && _hj.date.month && _hj.date.day) {
        this.searchConfig.date = _hj.date;
      }
      if (_hj.filters && _hj.filters.include && _hj.filters.exclude) {
        this.searchConfig.filters = _hj.filters;
      }
      if (_hj.timeRange && _hj.timeRange.start && _hj.timeRange.end) {
        this.searchConfig.timeRange = _hj.timeRange;
      }
      this.setHistorysDay();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    /**
     * カレンダー日付クリック時の処理
     */
    dateClick: function(dayNum) {
      if (dayNum !== "") {
        this.day = dayNum;
      }
    },
    setHistorysDay: function() {
      this.year = this.searchConfig.date.year;
      this.month = this.searchConfig.date.month;
      this.day = this.searchConfig.date.day;
    },
    setToday: function() {
      if (
        this.year !== Number(this.today.split("-")[0]) ||
        this.month !== Number(this.today.split("-")[1])
      ) {
        this.day = -1;
      }
      this.year = Number(this.today.split("-")[0]);
      this.month = Number(this.today.split("-")[1]);
    },
    /**
     * 今日かどうかの判定
     * 年、月は現在選択しているページ
     * 日は引数
     */
    isToday: function(day) {
      var date = this.year + "-" + ("0" + this.month).slice(-2) + "-" + day;
      if (this.today === date) {
        return true;
      }
      return false;
    },
    /**
     * 先月のカレンダーを取得
     */
    setLastMonth: function() {
      if (this.month === 1) {
        this.year--;
        this.month = 12;
      } else {
        this.month--;
      }
      this.day = -1;
    },
    /**
     * 翌月のカレンダーを取得
     */
    setNextMonth: function() {
      if (this.month === 12) {
        this.year++;
        this.month = 1;
      } else {
        this.month++;
      }
      this.day = -1;
    },
    changeTimeRange: function(e) {
      if (e.target.id === "set-am") {
        this.searchConfig.timeRange.start = "00:00:00";
        this.searchConfig.timeRange.end = "11:59:59";
      } else {
        this.searchConfig.timeRange.start = "12:00:00";
        this.searchConfig.timeRange.end = "23:59:59";
      }
    },
    copy: function() {
      /* Get the text field */
      const copyText = document.getElementById("myInput").innerHTML;
      localStorage.history = JSON.stringify(this.searchConfig);
      /* Select the text field */
      execCopy(copyText);
      window.navigator.vibrate(100);
      function execCopy(string) {
        // 空div 生成
        var tmp = document.createElement("div");
        // 選択用のタグ生成
        var pre = document.createElement("pre");

        // 親要素のCSSで user-select: none だとコピーできないので書き換える
        pre.style.webkitUserSelect = "auto";
        pre.style.userSelect = "auto";

        tmp.appendChild(pre).textContent = string;

        // 要素を画面外へ
        var s = tmp.style;
        s.position = "fixed";
        s.right = "200%";

        // body に追加
        document.body.appendChild(tmp);
        // 要素を選択
        document.getSelection().selectAllChildren(tmp);

        // クリップボードにコピー
        var result = document.execCommand("copy");

        // 要素削除
        document.body.removeChild(tmp);

        return result;
      }
    }
  },
  computed: {
    calData: function() {
      console.log(this.year + "-" + this.month + "のデータ作成");
      var calData = [];
      // 初日の曜日を取得
      var firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();
      // 月の日数
      var lastDay = new Date(this.year, this.month, 0).getDate();
      // 日数カウント用
      var dayNum = 1;
      // 週ごとのデータを作成して、calDateにpush
      while (dayNum <= lastDay) {
        var weekData = [];

        // 日曜～土曜の日付データを配列で作成
        for (var i = 0; i <= 6; i++) {
          if (calData.length === 0 && i < firstWeekDay) {
            // 初週の1日以前の曜日は空文字
            weekData[i] = "";
          } else if (lastDay < dayNum) {
            // 最終日以降の曜日は空文字
            weekData[i] = "";
          } else {
            // 通常の日付入力
            weekData[i] = dayNum;
            dayNum++;
          }
        }
        calData.push(weekData);
      }
      return calData;
    }
  }
};
</script>
<style scoped>
button {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  font-family: "Roboto Mono", monospace;
}
input {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  background: white;
  border: solid #636363;
  border-width: 0.05rem 0.05rem 0.05rem 0.05rem;
  font-family: "Roboto Mono", monospace;
}

#cal-header {
  font-size: 1.8rem;
  padding: 0;
  text-align: center;
  margin-bottom: 0.2rem;
  background-color: rgb(160, 146, 221);
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
#cal-wrap {
  height: 16rem;
}
#cal-header span {
  padding: 0.4rem 1.5rem;
  color: white;
  display: inline-block;
}
#cal-main {
  font-size: 1.2rem;
  line-height: 1rem;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 0.4rem;
  color: #212529;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}
#cal-main th {
  font-size: 1rem;
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: normal;
  color: #999;
}
#cal-main td {
  padding: 0.8rem;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #ddd;
}
#cal-wrap > div {
  text-align: right;
  margin: 0rem 1rem;
}
.cal-today {
  background-color: #ffe0f7;
}
.cal-day.active > span {
  border-bottom: 0.2rem solid rgb(230, 166, 221);
}
.search-config {
  margin: 2rem;
  text-align: left;
}
.search-config > p:nth-child(1) {
  font-size: 1.4rem;
  border-left: solid 0.2rem rgb(148, 96, 148);
  margin: 0 0 1rem 0;
  padding: 0 0.4rem;
}
.search-config > div {
  margin: 0 0.6rem;
}
#search-range-of-time > div > span {
  margin: 0 1rem;
}
#search-range-of-time > div > div {
  margin: 1rem 0;
}
#search-range-of-time > div > div > label:nth-child(2) {
  margin-right: 1rem;
}
#search-option
  > div
  > table
  > tbody
  > tr:nth-child(2)
  > td:nth-child(2)
  > label:nth-child(2) {
  margin-right: 1rem;
}
#myInput {
  height: 3.6rem;
  padding: 0.2rem;
  font-size: 0.8rem;
  line-height: 1.2rem;
  background: white;
  border: solid #636363;
  border-width: 0.2rem 0.05rem 0.05rem 0.05rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.22);

  overflow: scroll;
}
#copyBtn {
  padding: 0.25em 0.5em;
  color: #fff;
  background: #c792d4;
  border: solid 0.05rem #b870ca;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.22);

  width: 60%;
  height: 3.6rem;
  margin: 1rem 1.6rem;
  font-size: 2rem;
  font-weight: 500;
}
#copyBtn:active {
  background: #bd75cf;
  border-bottom: solid 0.05rem #ac49c5;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.22);
}
</style>
