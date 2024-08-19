import { useState } from 'react';
import { Edit2, Trash, Add } from 'iconsax-react';
import styles from '../../../styles/Home.module.css';
import ConfirmDialog from '../../../src/components/common/ConfirmDialog';

const person = [
	{
		id: 1,
		name: 'Jacob Thornton',
		email: '@fat',
		status: 'Active',
		role: 'Sponsor',
	},
	{
		id: 2,
		name: 'Larry the Bird',
		email: '@fat',
		status: 'Active',
		role: 'Admin',
	},
	{
		id: 3,
		name: 'Tohno Hartini',
		email: '@fat',
		status: 'Active',
		role: 'Sponsor',
	},
	{
		id: 4,
		name: 'Mike Speccman',
		email: '@fat',
		status: 'Active',
		role: 'Admin',
	},
	{
		id: 5,
		name: 'Ody Sampacha',
		email: '@fat',
		status: 'Active',
		role: 'Sponsor',
	},
	{
		id: 6,
		name: 'Mikki Galatino',
		email: '@fat',
		status: 'Active',
		role: 'Sponsor',
	},
	{
		id: 7,
		name: 'Fushiguro Yumi',
		email: '@fat',
		status: 'Active',
		role: 'Sponsor',
	},
	{
		id: 8,
		name: 'John Knight Talos',
		email: '@fat',
		status: 'Active',
		role: 'Sponsor',
	},
	{
		id: 9,
		name: 'Jerry Freecs',
		email: '@fat',
		status: 'Active',
		role: 'Sponsor',
	},
	{
		id: 10,
		name: 'Mark Otto',
		email: '@mdo',
		status: 'Active',
		role: 'Sponsor',
	},
];

export default function Users() {
	const [visible, setVisible] = useState(false);
	const [selectedId, setSelectedId] = useState(null);
	const [data, setData] = useState(person);

	async function handleSearch(string) {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (string) {
			const person = [...data];
			const result = person.filter((v) => {
				return v.name.toLowerCase().includes(string.toLowerCase());
			});
			setData(result);
		} else {
			setData(person);
		}
	}

	function deleteUser() {
		const result = person.filter((v) => {
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
							<strong>Users Table</strong>
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
											Input into Users
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
											<label htmlFor="nama" className="htmlForm-label">
												Nama
											</label>
											<input
												type="text"
												className="htmlForm-control"
												id="nama"
												placeholder="Masukkan nama disini..."
											/>
										</div>
										<div className="mb-3">
											<label htmlFor="email" className="htmlForm-label">
												Email
											</label>
											<input
												type="email"
												className="htmlForm-control"
												id="email"
												placeholder="name@example.com"
											/>
										</div>
										<label htmlFor="password" className="htmlForm-label">
											Password
										</label>
										<div className="input-group mb-3">
											<input
												type="password"
												className="htmlForm-control"
												id="password"
											/>
											<button
												type="button"
												className="btn btn-outline-dark input-group-text"
											>
												<i className="icon" data-feather="eye"></i>
											</button>
										</div>
										<label
											htmlFor="password-confirm"
											className="htmlForm-label"
										>
											Konfirmasi Password
										</label>
										<div className="input-group mb-3">
											<input
												type="password"
												className="htmlForm-control"
												id="password-confirm"
											/>
											<button
												type="button"
												className="btn btn-outline-dark input-group-text"
											>
												<i className="icon" data-feather="eye"></i>
											</button>
										</div>
										<div className="mb-3">
											<label htmlFor="status" className="htmlForm-label">
												Status
											</label>
											<select
												className="htmlForm-select"
												aria-label="Users status"
												id="status"
											>
												<option value="pending" selected>
													Pending
												</option>
												<option value="active">Active</option>
												<option value="inactive">Inactive</option>
												<option value="banned">Banned</option>
											</select>
										</div>
										<div className="mb-3">
											<label htmlFor="role" className="htmlForm-label">
												Role
											</label>
											<select
												className="htmlForm-select"
												aria-label="Users status"
												id="role"
											>
												<option value="peserta" selected>
													Peserta
												</option>
												<option value="organizer">Organizer</option>
												<option value="sponsor">Sponsor</option>
												<option value="speaker">Speaker</option>
												<option value="moderator">Moderator</option>
												<option value="administrator">Administrator</option>
											</select>
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
													<th scope="col">E-Mail</th>
													<th scope="col">Status</th>
													<th scope="col">Role</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												{data.map((v, i) => (
													<tr key={v.id}>
														<th scope="row">{i + 1}</th>
														<td>{v.name}</td>
														<td>{v.email}</td>
														<td>{v.status}</td>
														<td>{v.role}</td>
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
