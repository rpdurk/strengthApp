import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Excercise</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Bench Press</MenuItem>
          <MenuItem value={20}>Squat</MenuItem>
          <MenuItem value={30}>Deadlift</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

// import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

// const options = [
//   "Bench Press",
//   "Squat",
//   "Shoulder Press",
//   "Tricep Extensions",
//   "Preacher Curls",
// ];

// const ITEM_HEIGHT = 48;

// export default function LongMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         Progress
//       </Button>
//       <Menu
//         id="long-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: "20ch",
//           },
//         }}
//       >
//         {options.map(option => (
//           <MenuItem
//             key={option}
//             selected={option === "Pyxis"}
//             onClick={handleClose}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }

// import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

// export default function SimpleMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         Open Menu
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }
