import { useState } from 'react';
import { Edit2, Trash, Add } from 'iconsax-react';
import styles from '../../../styles/Home.module.css';
import ConfirmDialog from '../../../src/components/common/ConfirmDialog';

const role_list = [
	{
		id: 1,
		role_name: 'Organizer',
		role_desc: 'Memiliki wewenang untuk organisasi, pengaturan dan pengarahan jalannya sebuah event.',
	},
	{
		id: 2,
		role_name: 'Sponsor',
		role_desc: 'Pihak yang membiayai dan mendukung event untuk berjalan.',
	},
	{
		id: 3,
		role_name: 'Speaker',
		role_desc: 'Pembicara event yang tampil didepan peserta saat event berjalan.',
	},
	{
		id: 4,
		role_name: 'Moderator',
		role_desc: 'Pengawas event, baik sebelum maupun saat event berjalan.',
	},
	{
		id: 5,
		role_name: 'Administrator',
		role_desc: 'Anda, yang memiliki hak akses penuh dashboard ini.',
	},
	{
		id: 6,
		role_name: 'Peserta',
		role_desc: 'Massa yang menghadiri event.',
	},
];

export default function Roles() {
	const [visible, setVisible] = useState(false);
	const [selectedId, setSelectedId] = useState(null);
	const [data, setData] = useState(role_list);

	async function handleSearch(string) {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (string) {
			const role_list = [...data];
			const result = role_list.filter((v) => {
				return v.role_name.toLowerCase().includes(string.toLowerCase());
			});
			setData(result);
		} else {
			setData(role_list);
		}
	}

	function deleteUser() {
		const result = role_list.filter((v) => {
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
				onApprove={deleteUser}
				title="Remove"
				body="Are you sure you want to remove this data"
			/>
			<div className="body flex-grow-1 px-3">
				<div className="container-lg">
					<div className="card mb-4">
						<div className="card-header d-md-flex justify-content-between">
							<strong>Roles Table</strong>
							<button
								type="button"
								className="btn btn-primary"
								data-coreui-toggle="modal"
								data-coreui-target="#inputModal"
							>
								<Add className='icon'/> New...
							</button>
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
											Input into Roles
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
											<label htmlFor="nama_role" className="htmlForm-label">
												Nama Role
											</label>
											<input
												type="text"
												className="htmlForm-control"
												id="nama_role"
												placeholder="Masukkan nama role disini..."
											/>
										</div>
										<div className="mb-3">
											<label htmlFor="deskripsi" className="htmlForm-label">
												Deskripsi
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
										<i className="icon" data-feather="search"></i> Search
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
													<th scope="col">Nama</th>
													<th scope="col">Deskripsi</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												{data.map((v, i) => (
													<tr key={v.id}>
														<th scope="row">{i + 1}</th>
														<td>{v.role_name}</td>
														<td>{v.role_desc}</td>
														<td className="d-flex gap-3">
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
