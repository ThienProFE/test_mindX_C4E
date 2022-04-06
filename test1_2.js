/*A.1 Cho một mảng các chuỗi, viết chương trình trả về mảng mới chứa các chuỗi có độ dài lớn nhất.
Ví dụ: INPUT là ["BINH”, "HUNG”, "PHUOC”, "CAO”, "KHANH”] thì 
OUTPUT return là ["PHUOC”, "KHANH”]*/
const nameArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
let allLongestStrings = [];
    nameArray.sort((a,b) => b.length - a.length) 
    let maxLength = 0;
    for (let i=0; i<nameArray.length; i++) {
        if (nameArray[i].length >= maxLength) {
            maxLength += nameArray[i].length;
            allLongestStrings.push(nameArray[i]);
        }
    }
    console.log(allLongestStrings);

//A.2
    const numberArray = [60,40,55,75,64];
    let number1 = [];
    let number2 = [];
    for (i=0; i<numberArray.length; i++) {
        if (i%2==0) {
            number1.push(numberArray[i]);
        } else {
            number2.push(numberArray[i]);
        }
    }
    let weight = [];
    let sum1=0;
    let sum2=0;
    for (let i=0; i<number1.length; i++) {
        sum1 += number1[i]
    }
    for (let i=0; i<number2.length; i++) {
        sum2 += number2[i]
    }
    weight.push(sum1, sum2);
    console.log(weight);