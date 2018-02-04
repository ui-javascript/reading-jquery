package space.qmen.lot.controller;

import space.qmen.lot.domain.Community;
import space.qmen.lot.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
@RestController
public class CommunityRestController {

    @Autowired
    private CommunityService communityService;

    @RequestMapping(value = "/api/community/{id}", method = RequestMethod.GET)
    public Community findOneCommunity(@PathVariable("id") Long id) {
        return communityService.findCommunityById(id);
    }

    @RequestMapping(value = "/api/community", method = RequestMethod.GET)
    public List<Community> findAllCommunity() {
        return communityService.findAllCommunity();
    }

    @RequestMapping(value = "/api/community", method = RequestMethod.POST)
    public void createCommunity(@RequestBody Community community) {
        communityService.saveCommunity(community);
    }

    @RequestMapping(value = "/api/community", method = RequestMethod.PUT)
    public void modifyCommunity(@RequestBody Community community) {
        communityService.updateCommunity(community);
    }

    @RequestMapping(value = "/api/community/{id}", method = RequestMethod.DELETE)
    public void modifyCommunity(@PathVariable("id") Long id) {
        communityService.deleteCommunity(id);
    }
}
