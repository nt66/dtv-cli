const AttributeModel = {
  namespace: 'attribute',
  state: {
    fontSize:'200',
    color:'#FF0000',
    data: 200,
    timer: 3000,
  },
  effects: {
  },
  reducers: {
    upDateFontSize(state:any, { payload }) {
      return {
        ...state,
        fontSize: payload,
      };
    },
    upDateColor(state:any, { payload }) {
      return {
        ...state,
        color: payload,
      };
    },
    upDateNum(state:any, { payload }){
      return {
        ...state,
        data: payload,
      };
    },
    upDateTimer(state:any, { payload }){
      return {
        ...state,
        timer: payload,
      };
    },
  }
};

export default AttributeModel;
