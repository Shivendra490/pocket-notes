const first2Chars = (groupName) => {
  if (groupName) {
    while (groupName.includes("  ")) {
      groupName = groupName.replace("  ", " "); //to remove the extra spaces between words
    }
    let result = "";
    const splitArr = groupName.split(" ");

    if (splitArr.length > 1) {
      result = splitArr[0][0] + splitArr[1][0];
    } else {
      result = splitArr[0][0];
    }

    return result.toUpperCase();
  }
};

export default first2Chars;
