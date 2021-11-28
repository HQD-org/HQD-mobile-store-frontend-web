import React from "react";
import { Table } from "reactstrap";
const Secifications = () => {
  return (
    <div>
      <Table bordered>
        <tbody>
          <tr>
            <th>Màn hình</th>
            <td>IPS LCD6.5"HD+</td>
          </tr>
          <tr>
            <th>Hệ điều hành</th>
            <td>Android 9 (Pie)</td>
          </tr>
          <tr>
            <th>Camera sau</th>
            <td>Chính 12 MP & Phụ 2 MP, 2 MP</td>
          </tr>
          <tr>
            <th>Camera trước</th>
            <td>8 MP</td>
          </tr>
          <tr>
            <th>Chip</th>
            <td>MediaTek Helio P35</td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>4 GB</td>
          </tr>
          <tr>
            <th>Bộ nhớ trong</th>
            <td>128 GB</td>
          </tr>
          <tr>
            <th>Sim</th>
            <td>2 Nano SIMHỗ trợ 4G</td>
          </tr>
          <tr>
            <th>Pin, Sạc</th>
            <td>4230 mAh</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Secifications;
