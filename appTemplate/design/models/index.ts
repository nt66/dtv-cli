import dva, { connect } from 'dva';
import AttributeModel  from './attr';

const app = dva();

app.model(AttributeModel);

export default app;