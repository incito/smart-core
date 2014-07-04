package com.incito.product.admin;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.incito.product.common.BaseCtrl;

/**
 * 示例代码
 * 
 * @author zhaigt
 * 
 */
@RestController
@RequestMapping("/demo")
public class DemoCtrl extends BaseCtrl {

  /**
   * xx功能 列表页面
   */
  @RequestMapping("")
  public ModelAndView list() {
    ModelAndView res = new ModelAndView("login");//对应 login.jsp
    try {
      // todo something...
      
    } catch (Exception e) {
      e.printStackTrace();
    }
    return res;
  }
  
  /**
   * xx功能-编辑/新增页面
   */
  @RequestMapping("/edit")
  public ModelAndView login() {
    ModelAndView res = new ModelAndView("driverAddModify");
    try {
      // todo something...
    } catch (Exception e) {
      e.printStackTrace();
    }
    return res;
  }
  
  /**
   * 删除功能
   */
  @RequestMapping("/delete")
  public ModelAndView index() {
    ModelAndView res = new ModelAndView("index");
    try {
      // todo something...
    } catch (Exception e) {
      e.printStackTrace();
    }
    return res;
  }

}
