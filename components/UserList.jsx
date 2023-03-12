function UserList() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
      <>
      <div className="widgetLg">
      <h3 className="ml-80 text-[22px] font-semibold">Latest Coupon Uses</h3>
      <table className="ml-80 w-full border-spacing-5">
        <tr className="widgetLgTr">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Coupon</th>
          <th className="text-left">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="flex items-center font-semibold">
            <img
              src="https://images.gr-assets.com/authors/1561336084p8/4123863.jpg"
              alt=""
              className="w-10 h-10 object-cover mr-2.5 rounded-[50%]"
            />
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="font-light">14 May 2022</td>
          <td className="font-light">U24jdGx</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="flex items-center font-semibold">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFsohsj7miS2w/profile-displayphoto-shrink_800_800/0/1651377283409?e=1657756800&v=beta&t=rHN6C2GAljYKMZKQkAhR5DZyXfGtPv2r3PCo0Zqw7aU"
              alt=""
              className="w-10 h-10 object-cover mr-2.5 rounded-[50%]"
            />
            <span className="widgetLgName">Ikechi Fortune</span>
          </td>
          <td className="font-light">12 May 2022</td>
          <td className="font-light">MD2r6gd</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="flex items-center font-semibold">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEhykPCKBTzRA/profile-displayphoto-shrink_800_800/0/1634862775537?e=1657756800&v=beta&t=P1dVhgLSGXr0rG0h2e0lsFLk4u5Pt-y5hdkT6t7u5PA"
              alt=""
              className="w-10 h-10 object-cover mr-2.5 rounded-[50%]"
            />
            <span className="widgetLgName">Isaac Okoro</span>
          </td>
          <td className="font-light">11 May 2022</td>
          <td className="font-light">wrj932bv</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="flex items-center font-semibold">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="w-10 h-10 object-cover mr-2.5 rounded-[50%]"
            />
            <span className="widgetLgName">Chinda Godwin</span>
          </td>
          <td className="font-light">9 May 2022</td>
          <td className="font-light">U24jdGx</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
      </>
  );
}

export default UserList;