// check ảnh
export function checkImageExtension(fileNameOrUrl) {
  // Tạo một mảng chứa các đuôi tệp ảnh được chấp nhận
  const imageExtensions = ["jpg", "jpeg", "png", "gif"];

  // Biểu thức chính quy để kiểm tra xem chuỗi có phải là một URL hợp lệ không
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // Kiểm tra xem fileNameOrUrl có tồn tại không
  if (!fileNameOrUrl) {
    return false; // Trả về false nếu fileNameOrUrl không tồn tại
  }

  // Nếu fileNameOrUrl là một URL
  if (urlRegex.test(fileNameOrUrl)) {
    // Kiểm tra xem URL có chứa phần mở rộng của tệp ảnh không
    const extension = (fileNameOrUrl.split(".").pop() || "").toLowerCase();
    if (imageExtensions.includes(extension)) {
      return true; // Trả về true nếu đuôi tệp ảnh hợp lệ
    } else {
      return false; // Trả về false nếu đuôi tệp ảnh không hợp lệ
    }
  } else {
    // Nếu fileNameOrUrl không phải là một URL, kiểm tra đuôi tệp trực tiếp
    const extension = (fileNameOrUrl.split(".").pop() || "").toLowerCase();
    if (imageExtensions.includes(extension)) {
      return true; // Trả về true nếu đuôi tệp ảnh hợp lệ
    } else {
      return false; // Trả về false nếu đuôi tệp ảnh không hợp lệ
    }
  }
}

// convertDate
export const convertDate = (data) => {
  const dateTimeString = data;
  const date = new Date(dateTimeString);
  const options = { year: "numeric" };
  const options2 = { month: "long" };
  const options3 = { day: "numeric" };
  // as const là không thể thay đổi sau khi đã khai báo.
  return (
    date.toLocaleDateString("en-US", options2).slice(0, 3) +
    " " +
    date.toLocaleDateString("en-US", options3) +
    ", " +
    date.toLocaleDateString("en-US", options)
  );
};

export const convertDateNumeric = (data) => {
  const dateTimeString = data;
  const date = new Date(dateTimeString);
  const Year = { year: "numeric" };
  const Month = { month: "numeric" };
  const Day = { day: "numeric" };
  // as const là không thể thay đổi sau khi đã khai báo.
  return (
    date.toLocaleDateString("en-US", Day) +
    "/" +
    date.toLocaleDateString("en-US", Month) +
    "/" +
    date.toLocaleDateString("en-US", Year)
  );
};
