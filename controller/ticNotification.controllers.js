const createTicNotification = require('../services/ticNotification.services')

exports.createTicNotification = async (req, res) => {
  try {
    const notification = await createTicNotification(req.body);
    if (notification.result) {
      return res.status(200).send({
        result: "Notification created",
        error: notification.reult,
      });
    }else{
        return res.status(401).send({
            result : notification
        })
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      result: "Notification not created"
    });
  }
};
