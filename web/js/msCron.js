/*
 =========================================================
 msCronjs
 https://github.com/onterumahendra/CronScheduler
 Copyright (c) 2016 MSquare Solutions
 =========================================================
 */
/*
 * Contributions:
 *  - Onteru Mahendra (msbrother445@gmail.com)
 *  - Padala Mallikarjuna (mallikarjuna.909@gmail.com)
 */


(function ($) {

    $.fn.msCron = function (options) {
        if (typeof options === "undefined") {
            options = {
                getCron: "",
                setCron: "",
                activeTab: "MINUTES"
            };
        }
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            getCron: "",
            setCron: "",
            activeTab: ""
        }, options);

        var self = this;
        var containerId = $(self).attr('id');

        var mainDiv = $("<div/>", {id: "CronGenMainDiv", style: "padding:15px;"});
        var topMenu = $("<ul/>", {"class": "nav nav-tabs", id: "msCronTabs"});
        $('<li/>', {'class': 'active'}).html($('<a id="msMinutesTab" role="tab" data-toggle="tab" href="#' + containerId + 'Minutes">Минуты</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msHourlyTab" role="tab" data-toggle="tab" href="#' + containerId + 'Hourly">Часы</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msDailyTab" role="tab" data-toggle="tab" href="#' + containerId + 'Daily">Дни</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msWeeklyTab" role="tab" data-toggle="tab" href="#' + containerId + 'Weekly">Недели</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msMonthlyTab" role="tab" data-toggle="tab" href="#' + containerId + 'Monthly">Месяцы</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msYearlyTab" role="tab" data-toggle="tab" href="#' + containerId + 'Yearly">Годы</a>')).appendTo(topMenu);
        $(topMenu).appendTo(mainDiv);
        var tabContent = $("<div/>", {"class": "tab-content"});
        //creating the minutesTab
        var minutesTab = $("<div/>", {"class": "tab-pane active", id: containerId+"Minutes"});
        var minutesTabSection = $("<div/>", {"style": "padding:15px"});
        $(minutesTabSection).append("Каждую&nbsp;");
        $("<input/>", {id: "MinutesInput", type: "text", value: "1", class: "form-control", style: "width: 40px;display:inline"}).appendTo(minutesTabSection);
        $(minutesTabSection).append("&nbsp;минуту");
        $(minutesTabSection).appendTo(minutesTab);
        $(minutesTab).appendTo(tabContent);
        //creating the hourlyTab
        var hourlyTab = $("<div/>", {"class": "tab-pane", id: containerId+"Hourly"});
        var hourlyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "HourlyRadio", checked: "checked"}).appendTo(hourlyOption1);
        $(hourlyOption1).append("&nbsp;Каждый&nbsp;");
        $("<input/>", {id: "HoursInput", type: "text", class: "form-control", value: "1", style: "width: 40px;display:inline"}).appendTo(hourlyOption1);
        $(hourlyOption1).append("&nbsp;час");
        $(hourlyOption1).appendTo(hourlyTab);
        var hourlyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "HourlyRadio"}).appendTo(hourlyOption2);
        $(hourlyOption2).append("&nbsp;В&nbsp;");
        $(hourlyOption2).append('<select id="AtHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(hourlyOption2).append('<select id="AtMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(hourlyOption2).appendTo(hourlyTab);
        $(hourlyTab).appendTo(tabContent);
        //creating the dailyTab
        var dailyTab = $("<div/>", {"class": "tab-pane", id: containerId+"Daily"});
        var dailyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "DailyRadio", checked: "checked"}).appendTo(dailyOption1);
        $(dailyOption1).append("&nbsp;Каждый&nbsp;");
        $("<input/>", {id: "DaysInput", type: "text", value: "1", class: "form-control", style: "width: 40px;display:inline"}).appendTo(dailyOption1);
        $(dailyOption1).append("&nbsp;день недели");
        $(dailyOption1).appendTo(dailyTab);
        var dailyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "DailyRadio"}).appendTo(dailyOption2);
        $(dailyOption2).append("&nbsp;Каждый день недели&nbsp;");
        $(dailyOption2).appendTo(dailyTab);
        $(dailyTab).append("Время&nbsp;");
        $(dailyTab).append('<select id="DailyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(dailyTab).append('<select id="DailyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(dailyTab).appendTo(tabContent);
        //creating the weeklyTab
        var weeklyTab = $("<div/>", {"class": "tab-pane", id: containerId+"Weekly"});
        var weeklyWell = $("<div/>", {"style": "padding:15px"});
        var monLabel = $("<label/>", {"class": "checkbox-inline", "style": "margin-right:5px"}).appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", value: "MON"}).appendTo(monLabel);
        $(monLabel).append("Понедельник");
        var tueLabel = $("<label/>", {"class": "checkbox-inline", "style": "margin-right:5px"}).appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", value: "TUE"}).appendTo(tueLabel);
        $(tueLabel).append("Вторник");
        var wedLabel = $("<label/>", {"class": "checkbox-inline", "style": "margin-right:5px"}).appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", value: "WED"}).appendTo(wedLabel);
        $(wedLabel).append("Среда");
        var thuLabel = $("<label/>", {"class": "checkbox-inline", "style": "margin-right:5px"}).appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", value: "THU"}).appendTo(thuLabel);
        $(thuLabel).append("Четверг");
        var friLabel = $("<label/>", {"class": "checkbox-inline", "style": "margin-right:5px"}).appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", value: "FRI"}).appendTo(friLabel);
        $(friLabel).append("Пятница");
        var satLabel = $("<label/>", {"class": "checkbox-inline", "style": "margin-right:5px"}).appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", value: "SAT"}).appendTo(satLabel);
        $(satLabel).append("Суббота");
        var sunLabel = $("<label/>", {"class": "checkbox-inline", "style": "margin-right:5px"}).appendTo(weeklyWell);
        $("<input/>", {type: "checkbox", value: "SUN"}).appendTo(sunLabel);
        $(sunLabel).append("Воскресенье");

        //Hack to fix the well box
        $(weeklyWell).appendTo(weeklyTab);
        $(weeklyTab).append("Время&nbsp;");
        $(weeklyTab).append('<select id="WeeklyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(weeklyTab).append('<select id="WeeklyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(weeklyTab).appendTo(tabContent);
        //creating the monthlyTab
        var monthlyTab = $("<div/>", {"class": "tab-pane", id: containerId+"Monthly"});
        var monthlyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "MonthlyRadio", checked: "checked"}).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;День&nbsp");
        $("<input/>", {id: "DayOfMOnthInput", type: "text", class: "form-control", value: "1", style: "width: 40px;display:inline"}).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;каждого&nbsp;");
        $("<input/>", {id: "MonthInput", type: "text", class: "form-control", value: "1", style: "width: 40px;display:inline;"}).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;месяца");
        $(monthlyOption1).appendTo(monthlyTab);
        var monthlyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "MonthlyRadio"}).appendTo(monthlyOption2);
        $(monthlyOption2).append("&nbsp;");
        $(monthlyOption2).append('<select id="WeekDay" class="form-control day-order-in-month" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(monthlyOption2).append('<select id="DayInWeekOrder" class="form-control week-days" style="width: 100px;display:inline"></select>');
        $(monthlyOption2).append("&nbsp;каждого&nbsp;");
        $("<input/>", {id: "EveryMonthInput", type: "text", class: "form-control", value: "1", style: "width: 40px;display:inline;"}).appendTo(monthlyOption2);
        $(monthlyOption2).append("&nbsp;месяца");
        $(monthlyOption2).appendTo(monthlyTab);
        $(monthlyTab).append("Время&nbsp;");
        $(monthlyTab).append('<select id="MonthlyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(monthlyTab).append('<select id="MonthlyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(monthlyTab).appendTo(tabContent);
        //creating the yearlyTab
        var yearlyTab = $("<div/>", {"class": "tab-pane", id: containerId+"Yearly"});
        var yearlyOption1 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "1", name: "YearlyRadio", checked: "checked"}).appendTo(yearlyOption1);
        $(yearlyOption1).append("&nbsp;Каждый&nbsp");
        $(yearlyOption1).append('<select id="MonthsOfYear" class="form-control months" style="width: 150px;display:inline"></select>');
        $(yearlyOption1).append("&nbsp;день&nbsp;");
        $("<input/>", {id: "YearInput", type: "text", class: "form-control", value: "1", style: "width: 40px;display:inline;"}).appendTo(yearlyOption1);
        $(yearlyOption1).appendTo(yearlyTab);
        var yearlyOption2 = $("<div/>", {"style": "padding:15px"});
        $("<input/>", {type: "radio", value: "2", name: "YearlyRadio"}).appendTo(yearlyOption2);
        $(yearlyOption2).append("&nbsp;В&nbsp;");
        $(yearlyOption2).append('<select id="DayOrderInYear" class="form-control day-order-in-month" style="width: 90px;display:inline;margin-right:5px;"></select>');
        $(yearlyOption2).append('<select id="DayWeekForYear" class="form-control week-days" style="width: 100px;display:inline"></select>');
        $(yearlyOption2).append("&nbsp;месяц&nbsp;");
        $(yearlyOption2).append('<select id="MonthsOfYear2" class="form-control months" style="width: 110px;display:inline"></select>');
        $(yearlyOption2).appendTo(yearlyTab);
        $(yearlyTab).append("Время&nbsp;");
        $(yearlyTab).append('<select id="YearlyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(yearlyTab).append('<select id="YearlyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(yearlyTab).appendTo(tabContent);
        $(tabContent).appendTo(mainDiv);
        $(this).html(mainDiv);

        fillDataOfMinutesAndHoursSelectOptions();
        fillDayWeekInMonth();
        fillInWeekDays();
        fillInMonths();

        // console.log($(this).find("#CronGenMainDiv select,input"));
        $(self).find("#CronGenMainDiv select,input").change(function (e) {
            generate();
        });
        $(self).find("#CronGenMainDiv input").focus(function (e) {
            generate();
        });
        if (options.setCron !== "") {
            populateCron(options.activeTab, options.setCron);
        } else {
            generate();
        }

        function fillInMonths() {
            var days = [
                {text: "Январь", val: "1"},
                {text: "Февраль", val: "2"},
                {text: "Март", val: "3"},
                {text: "Апрель", val: "4"},
                {text: "Май", val: "5"},
                {text: "Июнь", val: "6"},
                {text: "Июль", val: "7"},
                {text: "Август", val: "8"},
                {text: "Сентябрь", val: "9"},
                {text: "Октябрь", val: "10"},
                {text: "Ноябрь", val: "11"},
                {text: "Декабрь", val: "12"}
            ];
            $(self).find(".months").each(function () {
                fillOptions(this, days);
            });
        }

        function fillOptions(elements, options) {
            for (var i = 0; i < options.length; i++)
                $(elements).append("<option value='" + options[i].val + "'>" + options[i].text + "</option>");
        }

        function fillDataOfMinutesAndHoursSelectOptions() {
            for (var i = 0; i < 60; i++) {
                if (i < 24) {
                    $(self).find(".hours").each(function () {
                        $(this).append(timeSelectOption(i));
                    });
                }
                $(self).find(".minutes").each(function () {
                    $(this).append(timeSelectOption(i));
                });
            }
        }

        function fillInWeekDays() {
            var days = [
                {text: "Понедельник", val: "MON"},
                {text: "Вторник", val: "TUE"},
                {text: "Среда", val: "WED"},
                {text: "Четверг", val: "THU"},
                {text: "Пятница", val: "FRI"},
                {text: "Суббота", val: "SAT"},
                {text: "Воскресенье", val: "SUN"}
            ];
            $(self).find(".week-days").each(function () {
                fillOptions(this, days);
            });
        }

        function fillDayWeekInMonth() {
            var days = [
                {text: "Первый", val: "1"},
                {text: "Второй", val: "2"},
                {text: "Третий", val: "3"},
                {text: "Четвёртый", val: "4"}
            ];
            $(self).find(".day-order-in-month").each(function () {
                fillOptions(this, days);
            });
        }

        function displayTimeUnit(unit) {
            if (unit.toString().length == 1)
                return "0" + unit;
            return unit;
        }

        function timeSelectOption(i) {
            return "<option value='" + i + "'>" + displayTimeUnit(i) + "</option>";
        }

        function generate() {

            var activeTab = $(self).find("ul#msCronTabs li.active a").prop("id");
            var results = "", activeTab;
            switch (activeTab) {
                case "msMinutesTab":
                    results = "0 0/" + $(self).find("#MinutesInput").val() + " * 1/1 * ? *";
                    activeTab = "MINUTES";
                    break;
                case "msHourlyTab":
                    switch ($(self).find("input:radio[name=HourlyRadio]:checked").val()) {
                        case "1":
                            results = "0 0 0/" + $(self).find("#HoursInput").val() + " 1/1 * ? *";
                            break;
                        case "2":
                            results = "0 " + Number($(self).find("#AtMinutes").val()) + " " + Number($(self).find("#AtHours").val()) + " 1/1 * ? *";
                            break;
                    }
                    activeTab = "HOURLY";
                    break;
                case "msDailyTab":
                    switch ($(self).find("input:radio[name=DailyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($(self).find("#DailyMinutes").val()) + " " + Number($(self).find("#DailyHours").val()) + " 1/" + $(self).find("#DaysInput").val() + " * ? *";
                            break;
                        case "2":
                            results = "0 " + Number($(self).find("#DailyMinutes").val()) + " " + Number($(self).find("#DailyHours").val()) + " ? * MON-FRI *";
                            break;
                    }
                    activeTab = "DAILY";
                    break;
                case "msWeeklyTab":
                    var selectedDays = "";
                    $(self).find("#"+containerId+"Weekly input:checkbox:checked").each(function () {
                        selectedDays += $(this).val() + ",";
                    });
                    if (selectedDays.length > 0)
                        selectedDays = selectedDays.substr(0, selectedDays.length - 1);
                    results = "0 " + Number($(self).find("#WeeklyMinutes").val()) + " " + Number($(self).find("#WeeklyHours").val()) + " ? * " + selectedDays + " *";
                    activeTab = "WEEKLY";
                    break;
                case "msMonthlyTab":
                    switch ($(self).find("input:radio[name=MonthlyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($(self).find("#MonthlyMinutes").val()) + " " + Number($(self).find("#MonthlyHours").val()) + " " + $(self).find("#DayOfMOnthInput").val() + " 1/" + $(self).find("#MonthInput").val() + " ? *";
                            break;
                        case "2":
                            results = "0 " + Number($(self).find("#MonthlyMinutes").val()) + " " + Number($(self).find("#MonthlyHours").val()) + " ? 1/" + Number($(self).find("#EveryMonthInput").val()) + " " + $(self).find("#DayInWeekOrder").val() + "#" + $(self).find("#WeekDay").val() + " *";
                            break;
                    }
                    activeTab = "MONTHLY";
                    break;
                case "msYearlyTab":
                    switch ($(self).find("input:radio[name=YearlyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($(self).find("#YearlyMinutes").val()) + " " + Number($(self).find("#YearlyHours").val()) + " " + $(self).find("#YearInput").val() + " " + $(self).find("#MonthsOfYear").val() + " ? *";
                            break;
                        case "2":
                            results = "0 " + Number($(self).find("#YearlyMinutes").val()) + " " + Number($(self).find("#YearlyHours").val()) + " ? " + $(self).find("#MonthsOfYear2").val() + " " + $(self).find("#DayWeekForYear").val() + "#" + $(self).find("#DayOrderInYear").val() + " *";
                            break;
                    }
                    activeTab = "YEARLY";
                    break;
            }
            options.getCron = results;
            options.activeTab = activeTab;

        }

        function populateCron(actTab, expression) {
            validExp = expression.replace(/ +(?= )/g, '').trim();
            var validExp = validExp.split(" ");
            if (validExp.length === 7) {
                switch (actTab) {
                    case "MINUTES":
                        $(self).find('#msCronTabs a[href="#Minutes"]').tab('show');
                        expression = expression.match(/\d+/g);
                        $(self).find("#MinutesInput").val(expression[2]);
                        break
                    case "HOURLY":
                        $(self).find('#msCronTabs a[href="#Hourly"]').tab('show');
                        expression = expression.match(/\d+/g);
                        if (expression.length === 6) {
                            $(self).find("#HoursInput").val(expression[3]);
                            $(self).find("input:radio[name=HourlyRadio][value=1]").prop("checked", true);
                        } else {
                            $(self).find("#AtMinutes ").val(expression[1]);
                            $(self).find("#AtHours ").val(expression[2]);
                            $(self).find("input:radio[name=HourlyRadio][value=2]").prop("checked", true);
                        }
                        break
                    case "DAILY":
                        $(self).find('#msCronTabs a[href="#Daily"]').tab('show');
                        expression = expression.match(/\d+/g);
                        if (expression.length === 5) {
                            $(self).find("#DaysInput").val(expression[4]);
                            $(self).find("input:radio[name=DailyRadio][value=1]").prop("checked", true);
                        } else {

                            $(self).find("input:radio[name=DailyRadio][value=2]").prop("checked", true);
                        }
                        $(self).find("#DailyHours ").val(expression[2]);
                        $(self).find("#DailyMinutes ").val(expression[1]);

                        break
                    case "WEEKLY":
                        $(self).find('#msCronTabs a[href="#Weekly"]').tab('show');
                        var weekdays = expression;
                        expression = expression.match(/\d+/g);
                        $(self).find("#WeeklyMinutes").val(expression[1]);
                        $(self).find("#WeeklyHours").val(expression[2]);
                        $(self).find("#Weekly input:checkbox").each(function () {
                            if (weekdays.indexOf($(this).val()) >= 0) {
                                $(this).prop('checked', true);
                            }
                        });
                        break
                    case "MONTHLY":
                        $(self).find('#msCronTabs a[href="#Monthly"]').tab('show');
                        if (expression.indexOf('#') !== -1) {
                            $(self).find("input:radio[name=MonthlyRadio][value=2]").prop("checked", true);
                            $(self).find("#DayInWeekOrder").val(expression.substring(expression.indexOf('#'), expression.indexOf('#') - 3));
                            expression = expression.match(/\d+/g);
                            $(self).find("#WeekDay").val(expression[5]);
                            $(self).find("#EveryMonthInput").val(expression[4]);
                        } else {
                            expression = expression.match(/\d+/g);
                            $(self).find("#DayOfMOnthInput").val(expression[3]);
                            $(self).find("#MonthInput").val(expression[5]);
                            $(self).find("input:radio[name=MonthlyRadio][value=1]").prop("checked", true);
                        }
                        $(self).find("#MonthlyHours").val(expression[1]);
                        $(self).find("#MonthlyMinutes").val(expression[2]);


                        break
                    case "YEARLY":
                        $(self).find('#msCronTabs a[href="#Yearly"]').tab('show');
                        if (expression.indexOf('#') !== -1) {
                            $(self).find("input:radio[name=YearlyRadio][value=2]").prop("checked", true);
                            $(self).find("#DayWeekForYear").val(expression.substring(expression.indexOf('#'), expression.indexOf('#') - 3));
                            expression = expression.match(/\d+/g);
                            $(self).find("#DayOrderInYear").val(expression[4]);
                            $(self).find("#MonthsOfYear2").val(expression[3]);
                        } else {
                            expression = expression.match(/\d+/g);
                            $(self).find("#MonthsOfYear").val(expression[4]);
                            $(self).find("#YearInput").val(expression[3]);
                            $(self).find("input:radio[name=YearlyRadio][value=1]").prop("checked", true);
                        }
                        $(self).find("#YearlyHours").val(expression[2]);
                        $(self).find("#YearlyMinutes").val(expression[1]);

                        break
                }
            } else {
                alert("Invalid Cron Expression..!");
            }

        }
        function findSlash(str) {
            str.indexOf('/') === -1 ? false : true;
        }
        function findOneSlash(str) {
            str.indexOf('1/1') === -1 ? false : true;
        }


        return options;
    };
}(jQuery));