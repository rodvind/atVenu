import React from 'React';
import Table from './Table';
import Poster from './Poster';
import Price from './Price';
import AddNote from './AddNote';
import SettleButton from './SettleButton';


export default class Dashboard extends React.Component {
  state = {
    header:['QTY Avail.', 'Count In', 'Add', 'Total In', 'Comp', 'Count Out', 
      'Total Sold', 'Gross'
    ],
    data: {
      datasets: [{
        data: [0, 0],
        backgroundColor: [
          '#2bbadb',
          '#999'
        ]
      }],
      doughTotalSale: 0
    },
    options: {
      legend: {
        display: false
      },
      maintainAspectRatio: false ,responsive: true,
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 80
    },
    width: 50, height: 50,
    pageTitle: "Poster",
    posterPic: "https://picsum.photos/100",
    picDescription:'',
    price: undefined,
    qtyAvail: 0,
    countIn: 0,
    addIn: 0,
    totalIn: 0,
    compIn: 0,
    countOut: 0,
    totalSold: 0,
    grossTotal: 0,
    modalIsOpen: false,
    disabled:false,
    note:''
  };
  componentDidMount() {
    const stringCount = localStorage.getItem('countIn');
    const countIn = (!isNaN(parseInt(stringCount, 10))) ? parseInt(stringCount, 10) : this.state.countIn;

    const stringAdd = localStorage.getItem('addIn');
    const addIn = (!isNaN(parseInt(stringAdd, 10))) ? parseInt(stringAdd, 10) : this.state.addIn;
    
    const stringComp = localStorage.getItem('compIn');
    const compIn = (!isNaN(parseInt(stringComp, 10))) ? parseInt(stringComp, 10) : this.state.compIn;

    const stringCountOut = localStorage.getItem('countOut');
    const countOut = (!isNaN(parseInt(stringCountOut, 10))) ? parseInt(stringCountOut, 10) : this.state.countOut;

    const totalIn = (!isNaN((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10)))) ? ((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10))) :
    this.state.totalIn;

    const totalSold = (!isNaN(((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10))) - ((parseInt(stringCountOut, 10)) + (parseInt(stringComp, 10))))) ? 
    (((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10))) - ((parseInt(stringCountOut, 10)) + (parseInt(stringComp, 10)))) : 
    this.state.totalSold;

    const qtyAvail = (!isNaN(((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10))) - ((parseInt(stringCountOut, 10)) + (parseInt(stringComp, 10))))) ? 
    -Math.abs((((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10))) - ((parseInt(stringCountOut, 10)) + (parseInt(stringComp, 10))))) : 
    -Math.abs((this.state.totalSold));

    const data = {
      datasets: [{
        data: [Math.floor(
          ((((countIn + addIn) - (countOut + compIn))/(countIn + addIn)) * 100)
          ), 
          100 - (Math.floor(
            ((((countIn + addIn) - (countOut + compIn))/(countIn + addIn)) * 100)
            ))]
      }],
      doughTotalSale: (!isNaN(((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10))) - ((parseInt(stringCountOut, 10)) + (parseInt(stringComp, 10))))) ? 
      (((parseInt(stringAdd, 10)) + (parseInt(stringCount, 10))) - ((parseInt(stringCountOut, 10)) + (parseInt(stringComp, 10)))) : 
      this.state.totalSold
    };

    const stringGross = localStorage.getItem('grossTotal');
    const grossTotal = parseInt(stringGross, 10);
      this.setState(() => (
        { qtyAvail, countIn, addIn, 
          totalIn, 
          compIn, countOut, 
          totalSold, 
          grossTotal: totalSold * this.state.price,
          data
        }
      ));
      console.log('fetching data');
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('price', this.state.price);
    const countIn = (prevState.countIn !== this.state.countIn) ? localStorage.setItem('countIn', this.state.countIn) : this.state.countIn;
    const addIn = (prevState.addIn !== this.state.addIn) ? localStorage.setItem('addIn', this.state.addIn) : this.state.addIn;
    //const totalIn = (prevState.totalIn !== this.state.totalIn) ? localStorage.setItem('totalIn', this.state.totalIn) : this.state.totalIn;
    const compIn = (prevState.compIn !== this.state.compIn) ? localStorage.setItem('compIn', this.state.compIn) : this.state.compIn;
    const countOut = (prevState.countOut !== this.state.countOut) ? localStorage.setItem('countOut', this.state.countOut) : this.state.countOut;
    //const totalSold = (prevState.totalSold !== this.state.totalSold) ? localStorage.setItem('totalSold', this.state.totalSold) : this.state.totalSold;
    localStorage.setItem('grossTotal', this.state.grossTotal);

    console.log('saving data');
  }

  handleInput = (e) => {
    if (e.target.name==='price'){
      const price = e.target.value;
      this.setState(() => ({ price }));
    } 
    // else if (e.target.name==='qtyAvail') {
    //   const qtyAvail = e.target.value;
    //   this.setState(() => ({ qtyAvail }));
    // } 
    else if (e.target.name==='countIn') {
      const countIn = (!isNaN(e.target.value)) ? e.target.value : this.state.countIn;
      const totalIn = parseInt(countIn, 10) + parseInt(this.state.addIn, 10);
      const totalSold = parseInt(countIn, 10) + parseInt(this.state.addIn, 10) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10));
      const qtyAvail = -Math.abs(parseInt(countIn, 10) + parseInt(this.state.addIn, 10) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10)));
      const data = {
        datasets: [{
          data: [Math.floor(
            ((parseInt(totalSold)/parseInt(totalIn)) * 100)
            ), 
            100 - (Math.floor(((parseInt(totalSold)/parseInt(totalIn)) * 100)))]
        }],
        doughTotalSale: parseInt(countIn, 10) + parseInt(this.state.addIn, 10) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10))
      };
      console.log(((parseInt(totalSold)/parseInt(totalIn)) * 100));
      this.setState(() => ({ countIn, totalIn, totalSold, data, qtyAvail}));
    }else if (e.target.name==='addIn') {
      const addIn = (!isNaN(e.target.value)) ? e.target.value : this.state.addIn;
      const totalIn = parseInt(this.state.countIn, 10) + parseInt(addIn, 10);
      const totalSold = (parseInt(this.state.countIn, 10) + parseInt(addIn, 10)) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10));
      const qtyAvail= -Math.abs((parseInt(this.state.countIn, 10) + parseInt(addIn, 10)) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10)));
      const data = {
        datasets: [{
          data: [Math.floor(
            ((parseInt(totalSold)/parseInt(totalIn)) * 100)
            ), 
            100 - (Math.floor(((parseInt(totalSold)/parseInt(totalIn)) * 100)))]
        }],
        doughTotalSale: (parseInt(this.state.countIn, 10) + parseInt(addIn, 10)) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10))
      };
      this.setState(() => ({ addIn, totalIn, totalSold, data, qtyAvail }));
    }else if (e.target.name==='totalIn') {
      const totalIn = (!isNaN(e.target.value)) ? e.target.value : this.state.totalIn;
      const totalSold = (parseInt(totalIn, 10)) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10));
      const qtyAvail = -Math.abs((parseInt(totalIn, 10)) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10)));
      const data = {
        datasets: [{
          data: [Math.floor(
            ((parseInt(totalSold, 10)/parseInt(totalIn, 10)) * 100)
            ), 
            100 - (Math.floor(((parseInt(totalSold, 10)/parseInt(totalIn, 10)) * 100)))]
        }],
          doughTotalSale: (parseInt(totalIn, 10)) - (parseInt(this.state.countOut, 10) + parseInt(this.state.compIn, 10))
      };
      this.setState(() => ({ totalIn, totalSold, data, qtyAvail }));
    } 
    else if (e.target.name==='compIn') {
      const compIn = (!isNaN(e.target.value)) ? e.target.value : this.state.compIn;
      const totalSold = parseInt(this.state.totalIn, 10) - (parseInt(this.state.countOut, 10) + parseInt(compIn, 10));
      const qtyAvail = -Math.abs(parseInt(this.state.totalIn, 10) - (parseInt(this.state.countOut, 10) + parseInt(compIn, 10)));
      const data = {
        datasets: [{
          data: [
            Math.floor(
            ((parseInt(totalSold, 10)/parseInt(this.state.totalIn, 10)) * 100)
            ), 
            100 - (Math.floor(((parseInt(totalSold, 10)/parseInt(this.state.totalIn, 10)) * 100)))
          ]
        }],
        doughTotalSale: parseInt(this.state.totalIn, 10) - (parseInt(this.state.countOut, 10) + parseInt(compIn, 10))
      };
      this.setState(() => ({ compIn, totalSold, data, qtyAvail }));
    } else if (e.target.name==='countOut') {
      const countOut = (!isNaN(e.target.value)) ? e.target.value : this.state.countOut;
      const totalSold = parseInt(this.state.totalIn, 10) - (parseInt(countOut, 10) + parseInt(this.state.compIn, 10));
      const qtyAvail = -Math.abs(parseInt(this.state.totalIn, 10) - (parseInt(countOut, 10) + parseInt(this.state.compIn, 10)));
      const data = {
        datasets: [{
          data: [Math.floor(
            ((parseInt(totalSold, 10)/parseInt(this.state.totalIn, 10)) * 100)
            ), 
            100 - (Math.floor(((parseInt(totalSold, 10)/parseInt(this.state.totalIn, 10)) * 100)))]
        }],
        doughTotalSale: parseInt(this.state.totalIn, 10) - (parseInt(countOut, 10) + parseInt(this.state.compIn, 10))
      };
      this.setState(() => ({ countOut, totalSold, data, qtyAvail }));
    } else if (e.target.name==='totalSold') {
      const totalSold = (!isNaN(e.target.value)) ? e.target.value : this.state.totalSold;
      const qtyAvail = -Math.abs((!isNaN(e.target.value)) ? e.target.value : this.state.totalSold);
      const data = {
        datasets: [{
          data: [Math.floor(
            ((parseInt(totalSold, 10)/parseInt(this.state.totalIn, 10)) * 100)
          ), 
            100 - (Math.floor(((parseInt(totalSold, 10)/parseInt(this.state.totalIn, 10)) * 100)))]
        }],
        doughTotalSale: (!isNaN(e.target.value)) ? e.target.value : this.state.totalSold
      };
      this.setState(() => ({ totalSold, data, qtyAvail }));
    } else if (e.target.name==='grossTotal') {
      const grossTotal = e.target.value;
      this.setState(() => ({ grossTotal }));
    }
  };

  showModal = () => {
    const modalIsOpen = true;
    this.setState(() => ({ modalIsOpen }));
    console.log(this.state.modalIsOpen);
  };

  closeModal = () => {
    const modalIsOpen = false;
    this.setState(() => ({ modalIsOpen }));
  };

  handleSettle = () => {
    this.setState(() => ({ disabled: true}));
    
  };

  handleNote = (e) => {
    if (e.target.name==='description') {
      const note = e.target.value;
      this.setState(() => ({ note }));
    }
  };

  handlePrice = (e) => {
    if(e.target.name==='price') {
      const price = e.target.value;
      this.setState(() => ({ price }));
    }
  };
  render() {
    return(
      <div className='container'>
        <Poster 
          pageTitle={this.state.pageTitle}
          posterPic={this.state.posterPic}
          picDescription={this.state.picDescription}
          price={this.state.price}
        />
        <Table 
          header={this.state.header}
          data={this.state.data}
          options={this.state.options}
          doughTotalSale={this.state.doughTotalSale}
          width={this.state.width}
          height={this.state.height}
          price={this.state.price}
          qtyAvail={this.state.qtyAvail}
          countIn= {this.state.countIn}
          addIn={this.state.addIn}
          totalIn={this.state.totalIn}
          compIn={this.state.compIn}
          countOut={this.state.countOut}
          totalSold={this.state.totalSold}
          grossTotal={this.state.grossTotal}
          handleInput={this.handleInput}
          disabled={this.state.disabled}
          data={this.state.data} 
          options={this.state.options}
          totalSold={this.state.totalSold}
          width={this.state.width}
          height={this.state.height}
          showModal={this.showModal}
          picDescription={this.state.picDescription}
        />
        <AddNote 
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          handlePrice={this.handlePrice}
          handleNote={this.handleNote}
        />
        <hr className='br'/>
        <SettleButton 
          handleSettle={this.handleSettle}
        />
      </div>
    );
  }
}