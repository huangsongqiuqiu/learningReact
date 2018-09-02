import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="这是一个美丽的一天" subtitle="因为我的作业都交完了" />}
    >
      <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" />
    </CardMedia>
   
  </Card>
);

export default CardExampleWithAvatar;