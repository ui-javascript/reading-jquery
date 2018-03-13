package space.qmen.lot.controller;

import space.qmen.lot.domain.Space;
import space.qmen.lot.service.SpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
@RestController
public class SpaceRestController {
    @Autowired
    private SpaceService spaceService;

    @RequestMapping(value = "/api/space/{id}", method = RequestMethod.GET)
    public Space findOneSpace(@PathVariable("id") Long id) {
        return spaceService.findSpaceById(id);
    }

    @RequestMapping(value = "/api/space", method = RequestMethod.GET)
    public List<Space> findAllSpace() {
        return spaceService.findAllSpace();
    }

    @RequestMapping(value = "/api/space", method = RequestMethod.POST)
    public void createSpace(@RequestBody Space space) {
        spaceService.saveSpace(space);
    }

    @RequestMapping(value = "/api/space", method = RequestMethod.PUT)
    public void modifySpace(@RequestBody Space space) {
        spaceService.updateSpace(space);
    }

    @RequestMapping(value = "/api/space/{id}", method = RequestMethod.DELETE)
    public void modifySpace(@PathVariable("id") Long id) {
        spaceService.deleteSpace(id);
    }
}
