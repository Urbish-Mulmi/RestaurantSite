import orderModel from "../models/order.model.js";
export const createOrder = async (req, res)=>{

   console.log("REQUEST BODY:", req.body);

   const userId = req.user._id;
   const foods = req.body.foods;

   const order = await orderModel.create({
      userId,
      foods,
   })

   res.status(201).json({
      message:"order created",
      order,
   })
};
  export const success = async(req,res)=>{
    const encoded = req.query.data;
    console.log(encoded);
    const decoded = (JSON.parse(atob(encoded)));
    console.log(decoded);

    const{transaction_uuid} = decoded;

    await orderModel.findByIdAndUpdate(
      transaction_uuid,
      { // update payment status in database
        paymentStatus: decoded.status,
      },
      {new:true},
    );
    res.redirect(`http://localhost:5173/success?id=${transaction_uuid}`)
  }

  export const getOrderById = async(req,res)=>{
    const id = req.params.id;

    const order = await orderModel.findById(id)
    .populate("userId", "email fullName")
    .populate("foods.foodId");
    res.status(200).json({
      message: "order fetched",
      success: true,
      order,
    }    );
  }

  // admin-only: list every order, newest first
  export const getAllOrders = async (req, res) => {
    const orders = await orderModel
      .find()
      .populate("userId", "email fullName")
      .populate("foods.foodId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "orders fetched",
      success: true,
      orders,
    });
  };

  // admin-only: update an order's payment status
  export const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    const order = await orderModel.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({
        message: "order not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "order status updated",
      success: true,
      order,
    });
  };