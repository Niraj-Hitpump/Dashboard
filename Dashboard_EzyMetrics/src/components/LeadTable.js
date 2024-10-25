import React from "react";
import "./LeadTable.css";

const LeadTable = () => {
	return (
		<table className="lead-table">
			<thead>
				<tr>
					<th>#</th>
					<th>Product Name</th>
					<th>Unit Price(UGX)</th>
					<th>Quantity Available</th>
					<th>Sales Volume(UGX)</th>
					<th>Profit Margin</th>
					<th>Sales Representative</th>
				</tr>
			</thead>
			<tbody>
				{/* Sample data */}
				<tr>
					<td>01</td>
					<td>Enterprise ERP</td>
					<td>800K</td>
					<td>20</td>
					<td>16M</td>
					<td>60%</td>
					<td>Colin Wafula</td>
				</tr>
				<tr>
					<td>02</td>
					<td>Enterprise ERP</td>
					<td>700K</td>
					<td>50</td>
					<td>35M</td>
					<td>50%</td>
					<td>Nanyoga Mary</td>
				</tr>
				<tr>
					<td>03</td>
					<td>Web Dev'pt</td>
					<td>500K</td>
					<td>--</td>
					<td>500K</td>
					<td>30%</td>
					<td>Catherine Emmy</td>
				</tr>
				<tr>
					<td>04</td>
					<td>App Dev'pt</td>
					<td>800K</td>
					<td>20</td>
					<td>16M</td>
					<td>60%</td>
					<td>Emmy Lutalo</td>
				</tr>
				<tr>
					<td>05</td>
					<td>Enterprise ERP</td>
					<td>2M</td>
					<td>20</td>
					<td>4M</td>
					<td>60%</td>
					<td>Colin Wafula</td>
				</tr>
			</tbody>
		</table>
	);
};

export default LeadTable;
