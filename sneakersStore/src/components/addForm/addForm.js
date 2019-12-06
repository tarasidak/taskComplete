import React, { useState } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {setAvgPrice, setTotalAmount, setTotalCost} from "../../actions";
import {getAvgPrice, getTotalAmount, getTotalCost} from "../cardsDeshboard/helpers";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    flexWrap: "wrap",
    width:'40%',
    marginLeft: '30%'
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

function rand(addName){
  let rand = Math.floor(Math.random() * 1000);
  let randId = rand + addName;
  return randId;
}

const CustomizedInputs = (props) => {
  const classes = useStyles();
  const {setAvgPrice, setTotalAmount, setTotalCost} = props;

  const [addName, setAddName] = useState('');
  const [addPrice, setAddPrice] = useState('');
  const [addDesc, setAddDesc] = useState('');

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        onChange={e => setAddName(e.target.value)}
        className={classes.margin}
        label="Add Name"
        variant="outlined"
        id="nameInput"
      />
      <CssTextField
        onChange={e => setAddPrice(e.target.value)}
        className={classes.margin}
        label="Add Price"
        variant="outlined"
        id="priceInput"
      />
      <CssTextField
        onChange={e => setAddDesc(e.target.value)}
        className={classes.margin}
        label="Add Description"
        variant="outlined"
        id="deskInput"
      />
      <div className={classes.root}>
        <Button variant="contained" color="primary"
                onClick={() => {
                    const store = localStorage.getItem('savedSneaker');
                    let savedSneaker = JSON.parse(store);

                    savedSneaker.push({id: rand(addName), 'name': addName, 'price': addPrice, 'body': addDesc });
                    localStorage.setItem('savedSneaker', JSON.stringify(savedSneaker));

                    setAvgPrice(getAvgPrice(savedSneaker));
                    setTotalAmount(getTotalAmount(savedSneaker));
                    setTotalCost(getTotalCost(savedSneaker));
                }}>
            Add Item
        </Button>
        </div>
    </form>
  );
};

const mapDispatchToProps = {
  setAvgPrice,
  setTotalAmount,
  setTotalCost
};

export default connect(null, mapDispatchToProps)(CustomizedInputs)
