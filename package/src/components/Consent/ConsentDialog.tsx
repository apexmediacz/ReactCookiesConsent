import { Dialog } from '@mui/material';
import '../../styles/Consent.scss';
import { useEffect, useState } from 'react';

const ConsentDialog = () => {
	const [open, setOpen] = useState<boolean>(false);
	useEffect(() => {
		setOpen(true);
	}, []);
	return (
		<>
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
			</Dialog>
		</>
	)
}

export default ConsentDialog;