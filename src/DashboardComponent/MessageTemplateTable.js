import React, {useState} from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
 
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ViewColumn from '@material-ui/icons/ViewColumn';

 
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox  {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit  {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

function MessageTemplateTable() {
  const [state, setState] = useState({
    columns: [
      { title: 'Template Id', field: 'ID' , type: 'numeric' },
      { title: 'Template Name', field: 'TemplateName' },
      { title: 'Template Body', field: 'TemplateBody'  },
      { title: 'Campaign Name', field: 'CampaignName' ,
      lookup: { 1: 'Diwali Offer', 2: 'Holi Offer', 3: 'New Year Offer', 4: 'Padwa Offer', 5: 'Chritsmas Offer' },  
      },
      { title: 'Created at', field: 'createdAt' , type: 'datetime' },
    ],
    data: [
      { ID: 1, TemplateName: 'Diwali Offer',TemplateBody:'XYX',CampaignName:1, createdAt: 1987},
      { ID: 2, TemplateName: 'Holi Offer' ,TemplateBody:'XYX',CampaignName:2, createdAt: 1987},
      { ID: 3, TemplateName: 'New year Offer' ,TemplateBody:'XYX',CampaignName:3, createdAt: 1987},
      { ID: 4, TemplateName: 'Padwa Offer',TemplateBody:'XYX' ,CampaignName:4, createdAt: 1987},
      { ID: 5, TemplateName: 'Christmas Offer',TemplateBody:'XYX' ,CampaignName:5, createdAt: 1987},
    ],
  });

  return (
      <div className="TableWrapper">
    <MaterialTable
      title="Message Details"
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      options={{
        search:false,
        addRowPosition: "first"
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </div>
  );
}

export default MessageTemplateTable