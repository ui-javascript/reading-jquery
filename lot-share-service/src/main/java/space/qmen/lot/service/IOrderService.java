package space.qmen.lot.service;


import space.qmen.lot.model.dto.OwnerOrderDTO;
import space.qmen.lot.model.entity.Order;
import space.qmen.lot.model.param.OrderParam;
import space.qmen.lot.model.param.OrderRentingParam;
import space.qmen.lot.model.vo.OrderHistoryOrderVO;

import java.util.List;

public interface IOrderService {
    List<Order> listOrder();
    // 业主订单
    List<OwnerOrderDTO> listOrderByOwnerId(OrderParam orderParam);
    List<OrderHistoryOrderVO> listSpaceHistoryOrder(Long spaceId);


    Order getOrderById(Long id);

    Long deleteOrder(Long id);

    Long updateOrder(Order order);

    // 生成订单
    Long saveOrder(OrderRentingParam orderRentingParam);


}
