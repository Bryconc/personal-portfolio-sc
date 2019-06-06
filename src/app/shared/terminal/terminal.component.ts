import { Component, OnInit, Input } from '@angular/core';
import { TerminalCommand } from './terminal-command';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  @Input()
  public terminalContent: TerminalCommand[];

  constructor() {}

  ngOnInit() {}
}
