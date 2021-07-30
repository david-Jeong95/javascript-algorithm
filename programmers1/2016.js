function solution(a, b) {
    let date = new Date(`2016, ${a}, ${b}`);
    let day = ['SUN', 'MON','TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return day[date.getDay()]
}