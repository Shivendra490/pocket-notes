const first2Chars = (groupName) => {
  if (groupName) {
    console.log("2chars", groupName);
    let result=''
    const splitArr = groupName.split(" ");
    console.log("splitArr", splitArr);
    if (splitArr.length > 1) {
       result=splitArr[0][0] + splitArr[1][0];
    } else {
      result=splitArr[0][0].toUpperCase();
    }
    return result.toUpperCase()
  }
};

export default first2Chars;
