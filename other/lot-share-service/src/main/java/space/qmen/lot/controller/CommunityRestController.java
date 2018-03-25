package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Community;
import space.qmen.lot.service.ICommunityService;

import java.util.List;

@Api(value="小区", tags={"小区"})
@RequestMapping("/api/v1/community")
@RestController
public class CommunityRestController {
    @Autowired
    private ICommunityService communitySrervice;

    @ApiOperation("根据id获取小区")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Community getCommunityById(@PathVariable("id") Long id) {
        return communitySrervice.getCommunityById(id);
    }

    @ApiOperation("获取所有小区")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Community> listCommunity() { return communitySrervice.listCommunity(); }

    @ApiOperation("新增小区")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void saveCommunity(@RequestBody Community community) {
        communitySrervice.saveCommunity(community);
    }

    @ApiOperation("修改小区信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateZone(@RequestBody Community community) {  communitySrervice.updateCommunity(community); }

    @ApiOperation("根据id删除小区")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteZone(@PathVariable("id") Long id) {
        communitySrervice.deleteCommunity(id);
    }
}
