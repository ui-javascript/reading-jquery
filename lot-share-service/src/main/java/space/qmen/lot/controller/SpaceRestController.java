package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.model.entity.Space;
import space.qmen.lot.model.param.AreaSpaceAvailableParam;
import space.qmen.lot.model.param.CommunitySpaceAvailableParam;
import space.qmen.lot.model.param.SpaceParam;
import space.qmen.lot.model.param.WeekRuleParam;
import space.qmen.lot.service.ISpaceService;
import space.qmen.lot.utils.ResultUtil;
import springfox.documentation.annotations.ApiIgnore;

@Api(value="车位", tags={"车位"})
@RequestMapping("/api/v1")
@RestController
public class SpaceRestController {
    @Autowired
    private ISpaceService spaceService;

    @ApiIgnore()
    @ApiOperation("根据id获取车位")
    @RequestMapping(value = "/space/{id}", method = RequestMethod.GET)
    public Object getSpaceById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceById(id));
    }

    @ApiIgnore()
    @ApiOperation("获取所有车位")
    @RequestMapping(value = "/space", method = RequestMethod.GET)
    public Object listSpace() {
        return ResultUtil.getResultWithSuccess(spaceService.listSpace());
    }

    @ApiOperation("新增车位")
    @RequestMapping(value = "/space", method = RequestMethod.POST)
    public Object saveSpace(@RequestBody SpaceParam space) {
        spaceService.saveSpace(space);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore()
    @ApiOperation("修改车位信息")
    @RequestMapping(value = "/space", method = RequestMethod.PUT)
    public Object updateSpace(@RequestBody Space space) {
        spaceService.updateSpace(space);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiIgnore()
    @ApiOperation("根据id删除车位")
    @RequestMapping(value = "/space/{id}", method = RequestMethod.DELETE)
    public Object deleteSpace(@PathVariable("id") Long id) {
        spaceService.deleteSpace(id);
        return ResultUtil.getResultWithSuccess();
    }

    // 自定义
    @ApiOperation("根据业主信息获取车位详细信息")
    @RequestMapping(value = "/space-details/owner/{id}", method = RequestMethod.GET)
    public Object listSpaceDetailsByOwnerId(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.listSpaceDetailsByOwnerId(id));
    }

    @ApiOperation("根据车位id更新车位开放规则")
    @RequestMapping(value = "/space-rule", method = RequestMethod.PUT)
    public Object updateSpaceRule(@RequestBody WeekRuleParam weekRuleParam) {
        spaceService.updateSpaceRule(weekRuleParam);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("获取某Community的可租用车位数")
    @RequestMapping(value = "/community-space-available", method = RequestMethod.GET)
    public Object listCommunitySpaceAvailable(CommunitySpaceAvailableParam communitySpaceAvailableParam) {
        return ResultUtil.getResultWithSuccess(spaceService.listSpaceAvailable(communitySpaceAvailableParam));
    }

    @ApiOperation("获取某Area的可租用车位数")
    @RequestMapping(value = "/area-space-available", method = RequestMethod.GET)
    public Object listAreaSpaceAvailable(AreaSpaceAvailableParam areaSpaceAvailableParam) {
        return ResultUtil.getResultWithSuccess(spaceService.listAreaSpaceAvailable(areaSpaceAvailableParam));
    }



}
