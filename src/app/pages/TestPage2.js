import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const TestPage2 = () => {
  const componentRef = useRef();

  return (
    <div>
      <h1>In Hóa Đơn</h1>
      <ReactToPrint
        trigger={() => <button>In Hóa Đơn</button>}
        content={() => componentRef.current}
      />
      <div className="hidden">
        <InvoiceComponent ref={componentRef} />
      </div>
    </div>
  );
};

export default TestPage2;

const InvoiceComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Hóa Đơn</h1>
      <p>Tên khách hàng: John Doe</p>
      <p>Ngày: 2024-06-11</p>
      <table>
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sản phẩm A</td>
            <td>2</td>
            <td>$20</td>
          </tr>
          <tr>
            <td>Sản phẩm B</td>
            <td>1</td>
            <td>$10</td>
          </tr>
        </tbody>
      </table>
      <p>Tổng cộng: $50</p>
    </div>
  );
});
