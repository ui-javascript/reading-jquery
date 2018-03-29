package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Order;
import space.qmen.lot.service.IOrderService;
import space.qmen.lot.utils.ResultUtil;

import java.util.List;

@Api(value="订单", tags={"订单"})
@RequestMapping("/api/v1/order")
@RestController
public class OrderRestController {
    @Autowired
    private IOrderService orderService;

    @ApiOperation("根据id获取订单")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Object getOrderById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(orderService.getOrderById(id));
    }

    @ApiOperation("获取所有订单")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Object listOrder() {
        return ResultUtil.getResultWithSuccess(orderService.listOrder());
    }

    @ApiOperation("新增订单")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Object saveOrder(@RequestBody Order order) {
        orderService.saveOrder(order);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("修改订单信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Object updateOrder(@RequestBody Order order) {
        orderService.updateOrder(order);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("根据id删除订单")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Object deleteOrder(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
        return ResultUtil.getResultWithSuccess();
    }
}
