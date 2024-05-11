enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// функція приймає число дня тижня (від 0 до 6) та повертає чи є цей день вихідним

const isWeekend = (day: DayOfWeek): boolean => {
	if (day === DayOfWeek.Saturday || day===DayOfWeek.Sunday) {
    return true;
  } else {
    return false;
  }
};

// console.log(isWeekend(6));
// console.log(isWeekend(3));



