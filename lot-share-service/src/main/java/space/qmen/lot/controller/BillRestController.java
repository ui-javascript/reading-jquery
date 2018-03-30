package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.model.entity.Bill;
import space.qmen.lot.service.IBillService;
import space.qmen.lot.utils.ResultUtil;

@Api(value="账单", tags={"账单"})
@RequestMapping("/api/v1/bill")
@RestController
public class BillRestController {
    @Autowired
    private IBillService billService;

    @ApiOperation("根据id获取账单")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Object getBillById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(billService.getBillById(id));
    }

    @ApiOperation("获取所有账单")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Object listBill() {
        return ResultUtil.getResultWithSuccess(billService.listBill());
    }

    @ApiOperation("新增账单")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Object saveBill(@RequestBody Bill bill) {
        billService.saveBill(bill);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("修改账单信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Object updateBill(@RequestBody Bill bill) {
        billService.updateBill(bill);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("根据id删除账单")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Object deletBill(@PathVariable("id") Long id) {
        billService.deleteBill(id);
        return ResultUtil.getResultWithSuccess();
    }
}
