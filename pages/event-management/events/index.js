import { useState } from 'react';
import { Edit2, Trash, Add, SearchNormal, Eye } from 'iconsax-react';
import styles from '../../../styles/Home.module.css';
import ConfirmDialog from '../../../src/components/common/ConfirmDialog';
import Link from 'next/link';


const event_list = [
	{
		id: 1,
		event_name: 'BLEACH 20th anniversary Original painting exhibition BLEACH EX. FINAL',
		event_category: 'pameran',
		event_start: '01-12-2023',
		event_end: '24-12-2023',
		event_status: 'ended',
	},
	{
		id: 2,
		event_name: 'Pesona Suara dalam Seni Berkomunikasi : Emak-emak Berani Speak Up, Yuk!',
		event_category: 'seminar',
		event_start: '25-02-2024',
		event_end: '25-02-2024',
		event_status: 'ended',
	},
	{
		id: 3,
		event_name: 'Bioprocessing Summit Europe 2024',
		event_category: 'konferensi',
		event_start: '19-03-2024',
		event_end: '21-03-2024',
		event_status: 'coming soon',
	},
	{
		id: 4,
		event_name: 'Development Journey: Optimize the CRUD Application Using Laravel Filament',
		event_category: 'workshop',
		event_start: '21-02-2024',
		event_end: '21-02-2024',
		event_status: 'coming soon',
	},
	{
		id: 5,
		event_name: 'How to Make the Cloud Work for You',
		event_category: 'seminar',
		event_start: '17-02-2024',
		event_end: '17-02-2024',
		event_status: 'coming soon',
	},
	{
		id: 6,
		event_name: 'The 90s Festival 2023',
		event_category: 'konser',
		event_start: '12-08-2023',
		event_end: '13-08-2023',
		event_status: 'ended',
	},
	{
		id: 7,
		event_name: 'Apple Event',
		event_category: 'peluncuran produk',
		event_start: '12-09-2023',
		event_end: '12-09-2023',
		event_status: 'ended',
	},
];

export default function Events() {
	const [visible, setVisible] = useState(false);
	const [selectedId, setSelectedId] = useState(null);
	const [data, setData] = useState(event_list);

	async function handleSearch(string) {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (string) {
			const event_list = [...data];
			const result = event_list.filter((v) => {
				return v.event_name.toLowerCase().includes(string.toLowerCase());
			});
			setData(result);
		} else {
			setData(event_list);
		}
	}

	function deleteEventCategory() {
		const result = event_list.filter((v) => {
			return v.id !== selectedId;
		});
		setData(result);
		setVisible(false);
		setSelectedId(null);
	}

	return (
		<div className={styles.container}>
			<ConfirmDialog
				visible={visible}
				onClose={() => setVisible(false)}
				onApprove={deleteEventCategory}
				title="Remove"
				body="Are you sure you want to remove this data"
			/>
			<div className="body flex-grow-1 px-3">
				<div className="container-lg">
					<div className="card mb-4">
						<div className="card-header d-md-flex justify-content-between">
							<strong>Events Table</strong>
							<Link href={'/event-management/events/input-event'} className='btn-link'>
							<button
								type="button"
								className="btn btn-primary"
								data-coreui-toggle="modal"
								data-coreui-target="#inputModal"
							>
							<Add className='icon'/> New...
							</button>
							</Link>
						</div>

						<div
							className="modal fade"
							id="inputModal"
							tabIndex="-1"
							aria-labelledby="inpuModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="inpuModalLabel">
											Input into Events
										</h5>
										<button
											type="button"
											className="btn-close"
											data-coreui-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div className="modal-body">
										<div className="mb-3">
											<label htmlFor="nama_kategori" className="htmlForm-label">
												Nama Kategori
											</label>
											<input
												type="text"
												className="htmlForm-control"
												id="nama_kategori"
												placeholder="Masukkan nama kategori disini..."
											/>
										</div>
										<div className="mb-3">
											<label htmlFor="deskripsi" className="htmlForm-label">
												Status
											</label>
											<input
												type="text"
												className="htmlForm-control"
												id="deskripsi"
												placeholder="Masukkan nama deskripsi disini..."
											/>
										</div>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-coreui-dismiss="modal"
										>
											Close
										</button>
										<button type="button" className="btn btn-primary">
											Save changes
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="card-body">
							<div className="example">
								<ul
									className="nav nav-tabs d-md-flex pb-3 justify-content-between bottom-padder"
									role="tablist"
								>
									<li className="nav-item d-flex gap-2">
										Show
										<select
											name="data_length"
											aria-controls="Number of datas shown"
											className=""
										>
											<option value="10">10</option>
											<option value="25">25</option>
											<option value="50">50</option>
											<option value="100">100</option>
										</select>
										Entries
									</li>
									<li className="nav-item d-flex gap-2">
										<SearchNormal /> Search
										<input
											type="text"
											onChange={(e) => handleSearch(e.target.value)}
										/>
									</li>
								</ul>
								<div className="tab-content rounded-bottom">
									<div
										className="tab-pane p-3 active preview"
										role="tabpanel"
										id="preview-1005"
									>
										<table className="table table-striped table-hover">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">Nama Event</th>
													<th scope="col">Kategori Event</th>
													<th scope="col" colSpan={2} className='text-center'>Tanggal Event</th>
													<th scope="col">Status Event</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												{data.map((v, i) => (
													<tr key={v.id}>
														<th scope="row">{i + 1}</th>
														<td>{v.event_name}</td>
														<td>{v.event_category}</td>
														<td>{v.event_start}</td>
														<td>{v.event_end}</td>
														<td>{v.event_status}</td>
														<td className="d-flex gap-3">
															<button className="btn btn-info" type="button">
																<Eye size="16" color="#fff" />
															</button>
															<button className="btn btn-primary" type="button">
																<Edit2 size="16" color="#fff" />
															</button>
															<button
																onClick={() => {
																	setSelectedId(v.id);
																	setVisible(true);
																}}
																className="btn btn-danger"
																type="button"
															>
																<Trash size="16" color="#fff" />
															</button>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
								<nav
									aria-label="Users table pagination"
									className="top-padder d-md-flex justify-content-between"
								>
									<div
										className="align-self-start text-medium-emphasis small"
										id="entrynumber_info"
										role="entries_status"
										aria-live="polite"
									>
										Showing 1 to 10 of {data.length} entries
									</div>
									<ul className="pagination justify-content-end align-self-end">
										<li className="page-item disabled">
											<a className="page-link">Previous</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												Next
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


